// 확장 프로그램 설치 시 초기화
chrome.runtime.onInstalled.addListener(async () => {
  console.log('스마트 컨텍스트 메뉴 확장 프로그램이 설치되었습니다.');
  
  // 기본 검색 엔진 설정
  const result = await chrome.storage.sync.get(['searchEngines']);
  if (!result.searchEngines) {
    const defaultEngines = [
      { name: 'Google', url: 'https://www.google.com/search?q=%s', icon: '🔍' },
      { name: 'Naver', url: 'https://search.naver.com/search.naver?query=%s', icon: '🟢' },
      { name: 'Google 번역', url: 'https://translate.google.com/?sl=auto&tl=ko&text=%s', icon: '🌐' }
    ];
    await chrome.storage.sync.set({ searchEngines: defaultEngines });
  }
});

// 메시지 리스너 (필요 시 확장 가능)
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getEngines') {
    chrome.storage.sync.get(['searchEngines'], (result) => {
      sendResponse(result.searchEngines || []);
    });
    return true;
  }
});
