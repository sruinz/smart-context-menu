// 기본 검색 엔진
const defaultEngines = [
  { name: 'Google', url: 'https://www.google.com/search?q=%s', icon: '🔍' },
  { name: 'Naver', url: 'https://search.naver.com/search.naver?query=%s', icon: '🟢' },
  { name: 'Google 번역', url: 'https://translate.google.com/?sl=auto&tl=ko&text=%s', icon: '🌐' }
];

// 프리셋 검색 엔진
const presets = {
  'google-image': {
    name: 'Google 이미지',
    url: 'https://www.google.com/search?tbm=isch&q=%s',
    icon: '🖼️'
  },
  'youtube': {
    name: 'YouTube',
    url: 'https://www.youtube.com/results?search_query=%s',
    icon: '📺'
  },
  'wikipedia': {
    name: 'Wikipedia',
    url: 'https://ko.wikipedia.org/wiki/%s',
    icon: '📖'
  },
  'github': {
    name: 'GitHub',
    url: 'https://github.com/search?q=%s',
    icon: '💻'
  }
};

// DOM 요소
const engineList = document.getElementById('engineList');
const engineName = document.getElementById('engineName');
const engineUrl = document.getElementById('engineUrl');
const engineIcon = document.getElementById('engineIcon');
const addBtn = document.getElementById('addBtn');

// 검색 엔진 로드
async function loadEngines() {
  const result = await chrome.storage.sync.get(['searchEngines']);
  let engines = result.searchEngines;
  
  // 첫 실행 시 기본 엔진 설정
  if (!engines) {
    engines = defaultEngines;
    await chrome.storage.sync.set({ searchEngines: engines });
  }
  
  displayEngines(engines);
}

// 검색 엔진 표시
function displayEngines(engines) {
  if (engines.length === 0) {
    engineList.innerHTML = '<div class="empty-message">검색 엔진이 없습니다</div>';
    return;
  }
  
  engineList.innerHTML = '';
  
  engines.forEach((engine, index) => {
    const item = document.createElement('div');
    item.className = 'engine-item';
    
    item.innerHTML = `
      <div class="engine-icon">${engine.icon}</div>
      <div class="engine-info">
        <div class="engine-name">${engine.name}</div>
        <div class="engine-url">${engine.url}</div>
      </div>
      <button class="delete-btn" data-index="${index}">삭제</button>
    `;
    
    engineList.appendChild(item);
  });
  
  // 삭제 버튼 이벤트
  document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const index = parseInt(btn.dataset.index);
      await deleteEngine(index);
    });
  });
}

// 검색 엔진 추가
async function addEngine() {
  const name = engineName.value.trim();
  const url = engineUrl.value.trim();
  const icon = engineIcon.value.trim() || '🔍';
  
  if (!name || !url) {
    alert('이름과 URL을 모두 입력해주세요.');
    return;
  }
  
  if (!url.includes('%s')) {
    alert('URL에 %s를 포함해주세요. (검색어가 들어갈 위치)');
    return;
  }
  
  const result = await chrome.storage.sync.get(['searchEngines']);
  const engines = result.searchEngines || [];
  
  engines.push({ name, url, icon });
  
  await chrome.storage.sync.set({ searchEngines: engines });
  
  // 입력 필드 초기화
  engineName.value = '';
  engineUrl.value = '';
  engineIcon.value = '';
  
  loadEngines();
}

// 검색 엔진 삭제
async function deleteEngine(index) {
  const result = await chrome.storage.sync.get(['searchEngines']);
  const engines = result.searchEngines || [];
  
  engines.splice(index, 1);
  
  await chrome.storage.sync.set({ searchEngines: engines });
  
  loadEngines();
}

// 프리셋 버튼 클릭 이벤트
document.querySelectorAll('.preset-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const presetKey = btn.dataset.preset;
    const preset = presets[presetKey];
    
    if (preset) {
      engineName.value = preset.name;
      engineUrl.value = preset.url;
      engineIcon.value = preset.icon;
    }
  });
});

// 추가 버튼 이벤트
addBtn.addEventListener('click', addEngine);

// Enter 키로 추가
[engineName, engineUrl, engineIcon].forEach(input => {
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addEngine();
    }
  });
});

// 초기 로드
loadEngines();
