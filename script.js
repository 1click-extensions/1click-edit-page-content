chrome.runtime.onMessage.addListener(function(message){
	console.log(message)
	switch(message.action){
        case 'make_editable':
        document.getElementsByTagName('html')[0].setAttribute('contenteditable','true');
        var divPopUp = document.createElement('div');
        divPopUp.classList.add('one-click-editable-popup');
        divPopUp.innerHTML = '<div>' + chrome.i18n.getMessage("popup_message") + '</div>' + 
        '<style> .one-click-editable-popup{\
             position:fixed;top:140px;width:400px;\
          left: 30%; background: #fff;\
        border: #000 solid; padding: 10px 20px;\
        text-align: center; font-size: 24px;}\
          </style>';
        document.body.appendChild(divPopUp);
        //console.log(divPopUp);
        setTimeout(function(){
            document.body.removeChild(divPopUp);
        }, 4000);
        break;
    }
});