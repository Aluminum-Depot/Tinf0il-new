(function () {
    function loadSavedSettings() {
      const title = localStorage.getItem('websiteTitle');
      if (title) {
        document.title = title;
        const websiteTitleElem = document.getElementById('website-title');
        if (websiteTitleElem) {
          websiteTitleElem.textContent = title;
        }
      }
  
      const icon = localStorage.getItem('websiteIcon');
      if (icon) {
        let favicon = document.getElementById('favicon');
        if (!favicon) {
          favicon = document.createElement("link");
          favicon.id = "favicon"
          document.head.appendChild(favicon);
        }
        favicon.setAttribute('type', 'image/x-icon');
        favicon.setAttribute('rel', 'icon');
        favicon.href = icon
      }
  
      const css = localStorage.getItem('websiteCSS');
      if (css) {
        applyCSS(css);
  
        const cssSelect = document.getElementById('css-select');
        if (cssSelect) {
          for (let i = 0; i < cssSelect.options.length; i++) {
            if (cssSelect.options[i].value === css) {
              cssSelect.selectedIndex = i;
              break;
            }
          }
        }
      }
  
      if (window.location.pathname.includes('/settings/')) {
        const searchEngine = localStorage.getItem('searchEngine');
        const searchEngineSelect = document.getElementById('search-engine-select');
  
        if (searchEngineSelect) {
          searchEngineSelect.value = searchEngine;
          if (searchEngine === 'custom') {
            const customSearchEngineInput = document.getElementById('custom-search-engine-input');
            if (customSearchEngineInput) {
              customSearchEngineInput.style.display = 'block';
              customSearchEngineInput.value = localStorage.getItem('customSearchEngineUrl') || '';
            }
          }
        }
  
        const toggleBeta = document.getElementById('toggle-beta');
        if (toggleBeta) {
          const betaMode = localStorage.getItem('betaMode');
          toggleBeta.checked = betaMode === 'true';
        }
  
        const titleInput = document.getElementById('title-input');
        const iconInput = document.getElementById('icon-input');
        if (titleInput && iconInput) {
          titleInput.value = title || '';
          iconInput.value = icon || '';
        }
  
        const emergencyHotkey = localStorage.getItem('emergencyHotkey');
        const emergencyHotkeyInput = document.getElementById('emergency-switch-hotkey');
        if (emergencyHotkey && emergencyHotkeyInput) {
          emergencyHotkeyInput.value = emergencyHotkey;
        }
  
        if (emergencyHotkeyInput) {
          emergencyHotkeyInput.addEventListener('click', function (event) {
            event.preventDefault();
  
            document.addEventListener('keydown', function (keyEvent) {
              keyEvent.preventDefault();
  
              emergencyHotkeyInput.value = keyEvent.key.toLowerCase();
  
              document.removeEventListener('keydown', arguments.callee);
            });
          });
        }
  
        const emergencyURL = localStorage.getItem('emergencyURL');
        const emergencyURLInput = document.getElementById('emergency-url-input');
        if (emergencyURL && emergencyURLInput) {
          emergencyURLInput.value = emergencyURL;
        }
  
        const openNewWindow = localStorage.getItem('openNewWindow');
        const toggleAboutBlank = document.getElementById('open-new-window');
        if (toggleAboutBlank) {
          toggleAboutBlank.checked = openNewWindow === 'true';
        }
  
        const debugging = localStorage.getItem('debugging');
        const toggleDebugging = document.getElementById('toggle-debugging');
        if (toggleDebugging) {
          toggleDebugging.checked = debugging === 'true';
        }
  
        const fallbackUrl = localStorage.getItem('fallbackUrl');
        const fallbackUrlInput = document.getElementById('fallback-url-input');
        if (fallbackUrl && fallbackUrlInput) {
          fallbackUrlInput.value = fallbackUrl;
        }
  
        const proxyOption = localStorage.getItem('proxyOption');
        const proxySelect = document.getElementById('proxySelect');
        const options = proxySelect.options;
  
        for (let i = 0; i < options.length; i++) {
          if (options[i].value === proxyOption) {
            options[i].selected = true;
            break;
          }
        }
      }
  
      const customCSS = localStorage.getItem('websiteCSS');
      if (customCSS) {
        if (window.location.pathname.includes('css-editor.html')) {
          const styleSheet = document.createElement('style');
          styleSheet.id = 'custom-css';
          styleSheet.textContent = customCSS;
          document.head.appendChild(styleSheet);
        } else {
          applyCSS(customCSS);
        }
      } else {
        const defaultStyleSheet = document.createElement('link');
        defaultStyleSheet.rel = 'stylesheet';
        defaultStyleSheet.id = 'custom-css';
        document.head.appendChild(defaultStyleSheet);
      }
  
      const use24HourTimeCheckbox = document.getElementById('use-24hour-checkbox');
      if (use24HourTimeCheckbox) {
        const use24HourTime = localStorage.getItem('use24HourTime');
        use24HourTimeCheckbox.checked = use24HourTime === 'true';
      }
  
      const includeDateCheckbox = document.getElementById('include-date-checkbox');
      if (includeDateCheckbox) {
        const includeDate = localStorage.getItem('showDate');
        includeDateCheckbox.checked = includeDate === 'true';
      }
  
      const useSecondsCheckbox = document.getElementById('use-seconds-checkbox');
      if (useSecondsCheckbox) {
        const useSeconds = localStorage.getItem('useSeconds');
        useSecondsCheckbox.checked = useSeconds === 'true';
      }
    }
  
    function applyCSS(selectedCSS) {
      const styleSheets = document.getElementsByTagName('link');
  
      for (let i = 0; i < styleSheets.length; i++) {
        const styleSheet = styleSheets[i];
        if (styleSheet.getAttribute('id') === 'custom-css') {
          styleSheet.href = selectedCSS;
        }
      }
  
      const saveButton = document.getElementById('save-button');
      if (saveButton) {
        saveButton.addEventListener('click', function () {
          saveSettings();
        });
      }
    }
  
    function saveSettings() {
      const titleInput = document.getElementById('title-input');
      const title = titleInput.value.trim();
      localStorage.setItem('websiteTitle', title);
      console.log('Title saved:', title);
  
      const iconInput = document.getElementById('icon-input');
      const icon = iconInput.value.trim();
      localStorage.setItem('websiteIcon', icon);
      console.log('Icon saved:', icon);
  
      setTimeout(function () {
        location.reload();
      }, 100);
    }  
  
    function handleToggleBeta() {
      const toggleBeta = document.getElementById('toggle-beta');
  
      if (toggleBeta.checked) {
        localStorage.setItem('betaMode', 'true');
      } else {
        localStorage.removeItem('betaMode');
      }
    }
  
    function handleToggleAboutBlank() {
      const toggleAboutBlank = document.getElementById('open-new-window');
  
      if (toggleAboutBlank.checked) {
        localStorage.setItem('openNewWindow', 'true');
      } else {
        localStorage.removeItem('openNewWindow');
      }
    }
  
    loadSavedSettings();
  
    const applyCSSButton = document.getElementById('apply-css-button');
    if (applyCSSButton) {
      applyCSSButton.addEventListener('click', function () {
        const cssSelect = document.getElementById('css-select');
        const selectedCSS = cssSelect.value;
        applyCSS(selectedCSS);
  
        localStorage.setItem('websiteCSS', selectedCSS);
        console.log('CSS saved:', selectedCSS);
      });
    }
  
    const saveButton = document.getElementById('save-button');
    if (saveButton) {
      saveButton.addEventListener('click', function () {
        saveSettings();
      });
    }
  
    const searchEngineSelect = document.getElementById('search-engine-select');
    const customSearchEngineInput = document.getElementById('custom-search-engine-input');
  
    if (searchEngineSelect && customSearchEngineInput) {
      searchEngineSelect.addEventListener('change', function () {
        if (searchEngineSelect.value === 'custom') {
          customSearchEngineInput.style.display = 'block';
        } else {
          customSearchEngineInput.style.display = 'none';
        }
      });
    }
  
    const toggleAboutBlank = document.getElementById('open-new-window');
    if (toggleAboutBlank) {
      toggleAboutBlank.addEventListener('change', function () {
        handleToggleAboutBlank(); 
      });
    }
  
    const toggleDebugging = document.getElementById('toggle-debugging');
    if (toggleDebugging) {
      toggleDebugging.addEventListener('change', function () {
        handleToggleDebugging();
      });
    }
  
  
    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
      const openNewWindow = localStorage.getItem('openNewWindow');
    
      if (openNewWindow === 'true') {
        const newWindow = window.open('about:blank', '_blank', 'width=800,height=600');
        const newDocument = newWindow.document.open();
        newDocument.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <style type="text/css">
                body, html
                {
                  margin: 0; padding: 0; height: 100%; overflow: hidden;
                }
             </style>
            </head>
            <body>
              <iframe style="border: none; width: 100%; height: 100vh;" src="/newtab.html"></iframe>
            </body>
          </html>
        `);
        newDocument.close();
        const fallbackUrl = localStorage.getItem('fallbackUrl');
    
        if (fallbackUrl) {
          window.location.href = fallbackUrl;
        }
      } else {
        
      }
    }
  })();
