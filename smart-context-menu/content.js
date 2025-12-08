// 미니 컨텍스트 메뉴 관리
let miniMenu = null;
let selectedText = '';

// 기본 검색 엔진
const defaultEngines = [
  { name: 'Google', url: 'https://www.google.com/search?q=%s', icon: '🔍' },
  { name: 'Naver', url: 'https://search.naver.com/search.naver?query=%s', icon: '🟢' },
  { name: 'Google 번역', url: 'https://translate.google.com/?sl=auto&tl=ko&text=%s', icon: '🌐' }
];

// 미니 메뉴 생성
function createMiniMenu() {
  const menu = document.createElement('div');
  menu.id = 'smart-context-menu';
  menu.className = 'smart-context-menu';
  
  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'menu-buttons';
  
  menu.appendChild(buttonContainer);
  document.body.appendChild(menu);
  
  return menu;
}

// 검색 엔진 로드
async function loadSearchEngines() {
  const result = await chrome.storage.sync.get(['searchEngines']);
  return result.searchEngines || defaultEngines;
}

// 메뉴 버튼 업데이트
async function updateMenuButtons() {
  if (!miniMenu) return;
  
  const buttonContainer = miniMenu.querySelector('.menu-buttons');
  buttonContainer.innerHTML = '';
  
  // 복사 버튼
  const copyBtn = createButton('📋', '복사', () => {
    navigator.clipboard.writeText(selectedText);
    showToast('복사되었습니다');
    hideMiniMenu();
  });
  buttonContainer.appendChild(copyBtn);
  
  // 검색 엔진 버튼들
  const engines = await loadSearchEngines();
  engines.forEach(engine => {
    const btn = createButton(engine.icon, engine.name, () => {
      const url = engine.url.replace('%s', encodeURIComponent(selectedText));
      window.open(url, '_blank');
      hideMiniMenu();
    });
    buttonContainer.appendChild(btn);
  });
}

// 버튼 생성 헬퍼
function createButton(icon, title, onClick) {
  const btn = document.createElement('button');
  btn.className = 'menu-button';
  btn.innerHTML = `<span class="button-icon">${icon}</span>`;
  btn.title = title;
  btn.addEventListener('click', onClick);
  return btn;
}

// 토스트 메시지 표시
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'smart-toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add('show');
  }, 10);
  
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}

// 미니 메뉴 표시
async function showMiniMenu(x, y) {
  if (!miniMenu) {
    miniMenu = createMiniMenu();
  }
  
  await updateMenuButtons();
  
  // 위치 조정 (화면 밖으로 나가지 않도록)
  const menuWidth = 200;
  const menuHeight = 40;
  
  let left = x;
  let top = y - menuHeight - 10;
  
  if (left + menuWidth > window.innerWidth) {
    left = window.innerWidth - menuWidth - 10;
  }
  
  // 위쪽 공간이 부족하면 아래에 표시
  if (top < 0) {
    top = y + 10;
  }
  
  miniMenu.style.left = `${left}px`;
  miniMenu.style.top = `${top}px`;
  miniMenu.classList.add('show');
}

// 미니 메뉴 숨기기
function hideMiniMenu() {
  if (miniMenu) {
    miniMenu.classList.remove('show');
  }
}

// 텍스트 선택 이벤트 핸들러
document.addEventListener('mouseup', (e) => {
  setTimeout(() => {
    // 입력 필드에서는 메뉴 표시 안 함
    const target = e.target;
    if (target && (
      target.tagName === 'INPUT' || 
      target.tagName === 'TEXTAREA' || 
      target.isContentEditable
    )) {
      hideMiniMenu();
      return;
    }
    
    const selection = window.getSelection();
    const text = selection.toString().trim();
    
    if (text.length > 0) {
      selectedText = text;
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      
      // rect가 유효한지 확인 (width나 height가 0이면 무시)
      if (rect.width === 0 || rect.height === 0) {
        hideMiniMenu();
        return;
      }
      
      showMiniMenu(rect.left + window.scrollX, rect.top + window.scrollY);
    } else {
      hideMiniMenu();
    }
  }, 10);
});

// 클릭 시 메뉴 숨기기
document.addEventListener('mousedown', (e) => {
  if (miniMenu && !miniMenu.contains(e.target)) {
    hideMiniMenu();
  }
});

// 스크롤 시 메뉴 숨기기
document.addEventListener('scroll', () => {
  hideMiniMenu();
});

// 검색 엔진 변경 감지
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (changes.searchEngines) {
    updateMenuButtons();
  }
});
