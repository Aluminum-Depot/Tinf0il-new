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
  if (window.parent.window.location.href == "about:blank") document.getElementById("blankbtn").remove()

    function blank() {
    
      const tab = window.open('about:blank', '_blank');
    
    
      if (navigator.userAgent.search("Firefox") != -1) {
        tab.onload = function() {
          const iframe = tab.document.createElement('iframe');
          const stl = iframe.style;
          stl.border = stl.outline = 'none';
          stl.width = '100vw';
          stl.height = '100vh';
          stl.position = 'fixed';
          stl.left = stl.right = stl.top = stl.bottom = '0';
          iframe.src = self.location;
          tab.document.body.appendChild(iframe);
        }
      } else {
        const iframe = tab.document.createElement('iframe');
        const stl = iframe.style;
        stl.border = stl.outline = 'none';
        stl.width = '100vw';
        stl.height = '100vh';
        stl.position = 'fixed';
        stl.left = stl.right = stl.top = stl.bottom = '0';
        iframe.src = self.location;
        tab.document.body.appendChild(iframe);
      }
      //window.parent.window.location.replace('https://classroom.google.com')
    }
    let inIframe;
    try {
      inIframe = window.self !== window.top;
    } catch (e) {
      inIframe = true;
    }
    const educationalSites = ["https://google.com"];
    function ABCloak(redirectToEducationalSite) {
      try {
        if (!inIframe) {
          const popup = open("about:blank", "_blank");
          if (popup) {
            const doc = popup.document;
            const iframe = doc.createElement("iframe");
            const style = iframe.style;
            const link = doc.createElement("link");
    
            var name = "Google Classroom";
            var icon =
              "data:image/jpeg;base64,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";
            if (localStorage.getItem("cloakTitle") !== null) {
              name = localStorage.getItem("cloakTitle");
              icon = localStorage.getItem("cloakIcon");
            }
            doc.title = name;
            link.rel = "icon";
            link.href = icon;
    
            iframe.src = location.href;
            style.border = style.outline = "none";
            style.width = style.height = "100%";
            style.overflow = "hidden";
            doc.body.style.margin = style.margin = 0;
            style.padding = 0;
            doc.head.appendChild(link);
            doc.body.appendChild(iframe);
            doc.URLBeforeCloak = location.href;
    
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.innerHTML = `
              window.onmessage = function (e) {
                if (e.data == 'cancelABCloak') {
                  location.replace("` + location.href + `");
                } else {
                  try {
                    var msg = JSON.parse(e.data);
                    if (msg.msg === "changeCloak") {
                      document.title = msg.title
                      let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
                      link.type = 'image/x-icon';
                      link.rel = 'shortcut icon';
                      link.href = msg.icon;
                      document.getElementsByTagName('head')[0].appendChild(link);
                    }
                  } catch { }
                }
              };`
            doc.body.append(script);
    
            if (redirectToEducationalSite)
              location.replace(
                educationalSites[Math.floor(Math.random() * educationalSites.length)]
              );
          }
        }
      }
      catch {
        ABCloak(true);
      }
    }
    
    if (localStorage.getItem("autoAB") == "true") {
      ABCloak(true);
    }
      