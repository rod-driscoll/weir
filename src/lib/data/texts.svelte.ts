// File: texts.ts

  export const roomData = {
    roomController: "Room 1 controller"
  };  

interface RoomText {
  [key: string]: {
    Connected: string[];
    Sources: string[];
    Pages: string[];
    SplashText: string;
    SplashLogo: string;
    SplashTagLine: string;
    VideoPrivacyPrompt: string;
    ZoomInPrompt: string;
    ZoomOutPrompt: string;
    HelpText: string;
    HelpPhonePrompt: string;
    HelpEmailPrompt: string;
    ShutdownPrompt: string;
    ShutdownYes: string;
    ShutdownNo: string;
    Combined: string[];
  };
}
interface HelpData {
    RoomName: string;
    HelpPhone: string;
    HelpEmail: string;
    DefaultLanguage: string;
    RoomText: RoomText;
}

export const helpData: HelpData = {
    RoomName: "Weir Minerals Room",
    HelpPhone: "(555) 555-5555",
    HelpEmail: "help@example.com",
    DefaultLanguage: "English",
    RoomText: {
        "English": {
            "Connected": ["Connected", "Not Connected"],
            "Sources": ["Source One", "Source Two", "Source Three"],
            "Pages": ["Cameras", "Help", "Home"],
            "SplashText": "Touch to Begin",
            "SplashLogo": "Weir Minerals",
            "SplashTagLine": "Training Room 1",
            "VideoPrivacyPrompt": "Video Privacy",
            "ZoomInPrompt": "Zoom In",
            "ZoomOutPrompt": "Zoom Out",
            "HelpText": "Have you tried turning it off and on again? If that doesn't work, please use the contact information below.",
            "HelpPhonePrompt": "Call For Assistance:",
            "HelpEmailPrompt": "Email to Report Issues:",
            "ShutdownPrompt": "Are You Sure You Want to Shut Down the System?",
            "ShutdownYes": "Yes, Shut System Down",
            "ShutdownNo": "No, Cancel",
            "Combined": ["Rooms combined", "Rooms separated", "Room 1", "Room 2", "Room 3"],
        },
        "Chinese/中文": {
            "Connected": ["Connected", "Not Connected"],
            "Sources": ["信号源 1", "信号源 2", "信号源 3"],
            "Pages": ["摄像机", "帮助", "首页"],
            "SplashText": "点击开始",
            "SplashLogo": "Weir Minerals",
            "SplashTagLine": "Training Room 1",
            "VideoPrivacyPrompt": "隐私模式",
            "ZoomInPrompt": "放大",
            "ZoomOutPrompt": "缩小",
            "HelpText": "您是否尝试过将其关闭并重新打开？如果这不起作用，请使用下面的联系信息",
            "HelpPhonePrompt": "致电寻求帮助:",
            "HelpEmailPrompt": "发送电子邮件报告此问题:",
            "ShutdownPrompt": "确定要关闭系统吗？",
            "ShutdownYes": "是的，关闭系统",
            "ShutdownNo": " 取消 ",
            "Combined": ["Rooms combined", "Rooms separated", "Room 1", "Room 2", "Room 3"],
        },
        "Deutsch": {
            "Connected": ["Connected", "Not Connected"],
            "Sources": ["Quelle Eins", "Quelle Zwei", "Quelle Drei"],
            "Pages": ["Kameras", "Hilfe", "Home"],
            "SplashText": "Zum Beginnen berühren",
            "SplashLogo": "Weir Minerals",
            "SplashTagLine": "Training Room 1",
            "VideoPrivacyPrompt": "Video Privacy",
            "ZoomInPrompt": "Zoom In",
            "ZoomOutPrompt": "Zoom Out",
            "HelpText": "Hast du versucht es aus und wieder an zu schalten? Falls das nicht funktioniert benutze bitte die Kontaktinformationen weiter unten.",
            "HelpPhonePrompt": "Hilfe anfragen:",
            "HelpEmailPrompt": "Email um Probleme zu melden:",
            "ShutdownPrompt": "Sicher dass du das System herunterfahren möchtest?",
            "ShutdownYes": "Ja, fahre das System herunter.",
            "ShutdownNo": "Nein, Abbruch.",
            "Combined": ["Rooms combined", "Rooms separated", "Room 1", "Room 2", "Room 3"],

        },
        "Français": {
            "Connected": ["Connected", "Not Connected"],
            "Sources": ["Source 1", "Source 2", "Source 3"],
            "Pages": ["Caméra", "Aide", "Accueil"],
            "SplashText": "Toucher pour commencer",
            "SplashLogo": "Weir Minerals",
            "SplashTagLine": "Training Room 1",
            "VideoPrivacyPrompt": "Confidentialité vidéo",
            "ZoomInPrompt": "Zoomer",
            "ZoomOutPrompt": "Dézoomer",
            "HelpText": "Avez-vous essayé d'éteindre et de rallumer le PC? Si cela ne fonctionne pas, veuillez utiliser les coordonnées ci-dessous.",
            "HelpPhonePrompt": "Appeler à l'aide:",
            "HelpEmailPrompt": "Envoyer un e-mail:",
            "ShutdownPrompt": "Êtes-vous sûr de vouloir arrêter le système?",
            "ShutdownYes": "Oui, arrêter le système",
            "ShutdownNo": "Non, annuler",
            "Combined": ["Rooms combined", "Rooms separated", "Room 1", "Room 2", "Room 3"],

        },
        "Spanish": {
            "Connected": ["Connected", "Not Connected"],
            "Sources": ["Fuente Uno", "Fuente Dos", "Fuente Tres"],
            "Pages": ["Cámaras", "Ayuda", "Inicio"],
            "SplashText": "Toque para Iniciar",
            "SplashLogo": "Weir Minerals",
            "SplashTagLine": "Training Room 1",
            "VideoPrivacyPrompt": "Privacidad de Video",
            "ZoomInPrompt": "Zoom In",
            "ZoomOutPrompt": "Zoom Out",
            "HelpText": "¿Ha intentado apagarlo y encenderlo nuevamente? Si eso no funciona, por favor use la información de contacto en la parte inferior. ",
            "HelpPhonePrompt": "Llame para Recibir Asistencia:",
            "HelpEmailPrompt": "Enviar un Email para Reportar Problemas:",
            "ShutdownPrompt": "¿Desea Apagar el Sistema?",
            "ShutdownYes": "Sí, Apaga el Sistema",
            "ShutdownNo": "No, Cancelar",
            "Combined": ["Rooms combined", "Rooms separated", "Room 1", "Room 2", "Room 3"],

        },
        "Portuguese": {
            "Connected": ["Connected", "Not Connected"],
            "Sources": ["Fonte Um", "Fonte Dois", "Fonte Três"],
            "Pages": ["Câmeras", "Ajuda", "Início"],
            "SplashText": "Toque para Começar",
            "SplashLogo": "Weir Minerals",
            "SplashTagLine": "Training Room 1",
            "VideoPrivacyPrompt": "Privacidade de Vídeo",
            "ZoomInPrompt": "Zoom In",
            "ZoomOutPrompt": "Zoom Out",
            "HelpText": "¿Você já tentou desligá-lo e ligá-lo novamente? Se isso não funcionar, use as informações de contato abaixo. ",
            "HelpPhonePrompt": "Chamada para Assistência:",
            "HelpEmailPrompt": " Envie um Email para Relatar Problemas:",
            "ShutdownPrompt": "¿Você quer desligar o sistema?",
            "ShutdownYes": " Sim, Desligue o Sistema ",
            "ShutdownNo": " Não, Cancelar ",
            "Combined": ["Rooms combined", "Rooms separated", "Room 1", "Room 2", "Room 3"],

        },
        "L33t": {
            "Connected": ["Connected", "Not Connected"],
            "Sources": ["50u2c3 0n3", "50u2c3 7w0", "50u2c3 7h233"],
            "Pages": ["C4m3245", "H31p", "H0m3"],
            "SplashText": "70uch 70 8391n",
            "SplashLogo": "Weir Minerals",
            "SplashTagLine": "Training Room 1",
            "VideoPrivacyPrompt": "V1d30 P21v4cy",
            "ZoomInPrompt": "200m 1n",
            "ZoomOutPrompt": "200m 0u7",
            "HelpText": "h4v3 y0u 7213d 7u2n1n9 17 0ff 4nd 0n 4941n? 1f 7h47 d035n'7 w02k, p13453 u53 7h3 c0n74c7 1nf02m4710n 8310w.",
            "HelpPhonePrompt": "C411 f02 4551574nc3:",
            "HelpEmailPrompt": "3m411 70 23p027 155u35:",
            "ShutdownPrompt": "423 y0u 5u23 y0u w4n7 70 5hu7 d0wn 7h3 5y573m?",
            "ShutdownYes": "Y35, 5hu7 5y573m d0wn",
            "ShutdownNo": "N0, c4nc31",
            "Combined": ["Rooms combined", "Rooms separated", "Room 1", "Room 2", "Room 3"],

        }
    } as RoomText
};

export const currentSettings = $state({
    Language: "English", // Default language
    Page: 'main', // Default page
    ShowSplash: true, // Show splash screen by default
    ShowPowerDialog: false, // Power dialog is hidden by default
    ShowHelpDialog: false, // Help dialog is hidden by default
    RoomText: helpData.RoomText['English']
});