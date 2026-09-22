/* rdr-elements console | source route-du-rhum c4b4142 | rdr-console.js */
try{(window.RDR_ELEMENTS=window.RDR_ELEMENTS||{})["console"]="c4b4142";performance.mark("rdr-elements:console")}catch(e){}
;(function(){
(function () {
  'use strict';

  var STYLE_ID = 'rdrc-styles';

   
  var CLASS_COLORS = {
    'Ultim': '#429991', 'Ocean Fifty': '#72b9f1', 'Class40': '#7e93ef',
    'IMOCA': '#76bcbe', 'Vintage Mono': '#d9c93a', 'Vintage Multi': '#f19f39'
  };

   
  var INSTA_COMPTE = 'route_du_rhum';
  var INSTA_FOLLOWERS_URL = 'https://www.instagram.com/' + INSTA_COMPTE + '/followers/';

  var VIEWS = [
    { id: 'audience', label: 'Audience' },
    { id: 'contenu',  label: 'Contenu' },
    { id: 'profils',  label: 'Profils' },
    { id: 'insta',    label: 'Instagram' },
    { id: 'photo',    label: 'Concours photo' },
    { id: 'village',  label: 'Village' },
    { id: 'mobilite', label: 'Mobilité' }
  ];

   
  var CANAL_LABELS = {
    organic_search: 'Recherche Google', direct: 'Accès direct', social: 'Réseaux sociaux',
    referral: 'Sites référents', email_marketing: 'E-mailing', paid: 'Publicité',
    ai_platform: 'Assistants IA', inconnu: 'Non identifié'
  };
  var APPAREIL_LABELS = { mobile: 'Mobile', desktop: 'Ordinateur', tablet: 'Tablette', inconnu: 'Inconnu' };

   
   
   
   
   
   
   
   
  var RDR_LOGO = 'data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D%220%200%20100%20100%22%20preserveAspectRatio%3D%22xMidYMid%20meet%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%22100%22%20width%3D%22100%22%3E%3Cg%3E%3Cpath%20fill%3D%22url(%23ee63fb4c-1830-4ba8-864e-80778395f02c_comp-mmv1wb4b_r_comp-mm3m0qfp)%22%20d%3D%22M100%200H0v100h100z%22%2F%3E%3Cpath%20fill%3D%22%23ffffff%22%20d%3D%22M34.485%2030.557a18.7%2018.7%200%200%200-2.304-2.665l-.227-.222a11%2011%200%200%200-2.279-1.655c-1.257-.788-2.99-1.092-4.886-1.278%202.48%201.335%206.624%204.124%206.856%204.64.103%201.932-1.165%204.004-2.96%206.535-2.185%203.093-13.21%2013.974-15.252%2019.84-2.417%206.964.294%2010.702%202.377%2014.088a13.5%2013.5%200%200%200%203.092%203.418%2014%2014%200%200%200%201.944%201.288c1.546.835%202.17%201.35%203.845%201.34h.124a38%2038%200%200%201-6.593-4.035c-.114-1.269%201.345-2.712%202.062-4.124%202.268-4.48%2011.118-11.856%2014.799-18.346%201.546-2.696%203.062-4.876%203.185-9.226.108-4.547-3.18-8.902-3.783-9.598%22%2F%3E%3Cpath%20fill%3D%22%23000000%22%20d%3D%22M17.325%2049.2a44%2044%200%200%200-2.119%203.047h17.892a30%2030%200%200%200%201.948-3%20.2.2%200%200%201%200-.046zm14.232-20.19c.108%201.959-1.16%204.072-2.954%206.655-.139.19-.309.417-.515.67h9.608a19.2%2019.2%200%200%200-3.289-6.186%2018%2018%200%200%200-2.314-2.685l-.232-.227a10.8%2010.8%200%200%200-2.299-1.65c-1.263-.788-3-1.087-4.907-1.257%202.5%201.33%206.665%204.108%206.902%204.68m-4.856%2030.825H12.459c-.096.977-.077%201.96.056%202.933h11.573c.835-.943%201.7-1.923%202.613-2.933m-3.078-18.299h14.475c.062-.515.103-1.077.118-1.675q.014-.591-.04-1.18H26.107c-.742.86-1.588%201.824-2.485%202.855Zm-9.752%2013.077q-.296.627-.516%201.284a20%2020%200%200%200-.463%201.572h15.927c.83-.943%201.655-1.897%202.439-2.856H13.87Zm6.361%2013.367a17.6%2017.6%200%200%201%201.887-2.846h-9.026a26%2026%200%200%200%202.665%205.026%2013.6%2013.6%200%200%200%203.093%203.448%2014%2014%200%200%200%201.953%201.294%2010%2010%200%200%200%204.902%201.31.5.5%200%200%200%20.124%200%2037.2%2037.2%200%200%201-6.66-4.042%208.2%208.2%200%200%201%201.062-4.19m1.356-24.078c-.81.959-1.63%201.943-2.423%202.933h17.222c.505-.935.916-1.917%201.227-2.933z%22%2F%3E%3Cpath%20fill%3D%22url(%23b76e3fef-ee30-4f04-9bb7-be606762fe7c_comp-mmv1wb4b_r_comp-mm3m0qfp)%22%20d%3D%22M12.165%2059.35c1.449%201.062%205.098%202.702%206.598%202.8a11.4%2011.4%200%200%201-5.423-1.593%204.2%204.2%200%200%201-1.175-1.206Z%22%2F%3E%3Cpath%20fill%3D%22url(%23fddb3550-482d-4de2-a1e4-ff7251f44c79_comp-mmv1wb4b_r_comp-mm3m0qfp)%22%20d%3D%22M24.335%206.959a4.46%204.46%200%200%201%201.5%201.546c-.773-.825-4.464-2.7-6.933-3.093%202.113.263%204.041.645%205.433%201.547%22%2F%3E%3Cpath%20fill%3D%22url(%23c3cafdf6-f6b0-4c52-a86c-b43232003b96_comp-mmv1wb4b_r_comp-mm3m0qfp)%22%20d%3D%22M18.902%2062.155h-.14c-1.5-.098-5.154-1.737-6.597-2.8a3.9%203.9%200%200%201-.578-1.824%2042.3%2042.3%200%200%200%207.315%204.624%22%2F%3E%3Cpath%20fill%3D%22url(%2328b2b744-eab8-4b02-b1fd-bc1d839f2242_comp-mmv1wb4b_r_comp-mm3m0qfp)%22%20d%3D%22M26.392%2010.093q.066.316.077.639c-.252-.603-4.82-3.768-7.556-5.304%202.469.397%206.16%202.273%206.933%203.093.27.488.456%201.02.546%201.572%22%2F%3E%3Cpath%20fill%3D%22url(%23ef65524b-f297-4c02-acd0-001252a980c0_comp-mmv1wb4b_r_comp-mm3m0qfp)%22%20d%3D%22M25.835%208.526a4.46%204.46%200%200%200-1.5-1.547%2012%2012%200%200%201%202.505%201.882l.253.258a6.77%206.77%200%200%201%201.984%204.309c.114%202.366-.593%204.49-2.309%207.14-3.866%205.979-15.876%2017.329-18.495%2022.68-2.706%205.551-2.69%207.938-.464%2011.958-2.247-3.794-5.19-8.005-2.33-15.66%202.418-6.453%2015-18.278%2017.526-21.649%202.062-2.763%203.536-5.03%203.464-7.175a4%204%200%200%200-.067-.64%204.9%204.9%200%200%200-.567-1.556%22%2F%3E%3Cpath%20fill%3D%22url(%237273e887-29b7-440b-b1cb-161465f93b4f_comp-mmv1wb4b_r_comp-mm3m0qfp)%22%20d%3D%22M29.603%2012.098c.66.81%204.237%205.711%203.99%2010.727-.232%204.82-2%207.216-3.773%2010.15-4.263%207.102-14.33%2015.076-16.975%2019.989-.84%201.546-1.355%203.154-1.257%204.562.039.646.237%201.273.577%201.824.306.477.704.887%201.17%201.207a16%2016%200%200%201-2.144-1.475c-2.578-2.458-3.16-5.067-1.547-8.953%202.753-6.516%2014.531-16.995%2017.856-22.114%201.031-1.582%203.902-5.226%204.124-9.675.103-2.386-.882-4.546-2.02-6.242Z%22%2F%3E%3Cpath%20fill%3D%22url(%230932f294-0251-451e-9a6a-6cd24f2ff8dd_comp-mmv1wb4b_r_comp-mm3m0qfp)%22%20d%3D%22M29.603%2012.098c1.14%201.696%202.124%203.856%202.01%206.242-.211%204.449-3.092%208.098-4.123%209.676-3.34%205.154-15.12%2015.598-17.856%2022.098-1.64%203.886-1.031%206.494%201.546%208.953a15.1%2015.1%200%200%201-3.37-3.86c-2.228-4.021-2.243-6.408.463-11.96%202.619-5.37%2014.629-16.721%2018.495-22.68%201.716-2.65%202.423-4.773%202.31-7.14a6.77%206.77%200%200%200-1.985-4.308c.93.91%201.77%201.908%202.51%202.979%22%2F%3E%3Cpath%20fill%3D%22%23000000%22%20d%3D%22M26.747%2059.789H12.505c-.1.976-.084%201.96.046%202.933h11.583c.82-.944%201.701-1.923%202.613-2.933%22%2F%3E%3Cpath%20fill%3D%22%23ffffff%22%20d%3D%22M54.407%2050.2h-.979v3.037h-2.19v-9.124h3.468c2.294%200%203.634%201.201%203.634%203.093a2.58%202.58%200%200%201-1.716%202.577l2.062%203.444h-2.578l-1.7-3.026Zm.444-1.747c.809%200%201.247-.402%201.247-1.17a1.114%201.114%200%200%200-1.263-1.216h-1.407v2.386zm9.02-4.546a4.743%204.743%200%201%201-4.81%204.743%204.59%204.59%200%200%201%204.81-4.743m0%207.413a2.68%202.68%200%201%200-2.608-2.67%202.51%202.51%200%200%200%202.608%202.67m13.789-2.176c0%202.753-1.588%204.248-3.974%204.248s-3.975-1.495-3.975-4.248v-5.056h2.217v4.99c0%201.546.598%202.242%201.783%202.242s1.79-.676%201.79-2.243v-4.99h2.159zm5.933-3.02v7.113h-2.191v-7.113h-2.789v-2.062h7.768v2.062zm3.82-2.036h6.65v2.062h-4.46v1.546h3.284v1.825h-3.284v1.654h4.52v2.062h-6.7l-.01-9.15ZM39.83%2055.943c2.727%200%204.809%201.85%204.809%204.603s-2.098%204.547-4.768%204.547h-3.923v-9.124zm-.114%207.088c1.356%200%202.722-.69%202.722-2.49%200-1.799-1.366-2.577-2.722-2.577H38.14v5.067zM53.623%2061c0%202.753-1.592%204.248-3.974%204.248-2.381%200-3.98-1.495-3.98-4.248v-5.057h2.217v4.995c0%201.547.603%202.237%201.79%202.237%201.185%200%201.783-.675%201.783-2.237v-4.995h2.164zm7.599%201.057h-.975v3.036h-2.19v-9.124h3.464c2.293%200%203.634%201.201%203.634%203.093a2.58%202.58%200%200%201-1.722%202.577l2.088%203.443h-2.578zm.443-1.748c.81%200%201.252-.402%201.252-1.17a1.118%201.118%200%200%200-1.262-1.216h-1.408v2.386zm10.392%201.175h-3.505v3.609H66.36v-9.124h2.19v3.443h3.506V55.97h2.19v9.124h-2.19v-3.609ZM83.474%2061c0%202.753-1.587%204.248-3.974%204.248-2.386%200-3.974-1.495-3.974-4.248v-5.057h2.216v4.995c0%201.547.598%202.237%201.784%202.237s1.783-.675%201.783-2.237v-4.995h2.165zm8.278%201.84v-3.247s-.453.835-.897%201.618l-.886%201.603h-1.227l-.887-1.577c-.453-.81-.886-1.629-.897-1.644h-.04v5.5h-2.191v-9.124h2.32l2.293%204.077h.041l2.304-4.077h2.232v9.124h-2.19z%22%2F%3E%3Cpath%20fill%3D%22%23FBDD00%22%20d%3D%22M31.005%2070.19c2.109%200%203.727%201.439%203.727%203.568s-1.624%203.5-3.716%203.5h-3V70.19h2.99Zm-.087%205.496c1.03%200%202.108-.516%202.108-1.928%200-1.413-1.062-1.964-2.108-1.964h-1.222v3.917zm4.52-5.496h5.155v1.604h-3.454v1.211h2.541v1.366h-2.546v1.294h3.5v1.546h-5.196v-7.02Zm7.372%204.867c.138.515.633.85%201.401.85.645%200%201.031-.221%201.031-.68%200-.675-.845-.634-1.711-.846-.959-.231-2.15-.675-2.15-2.17s1.088-2.16%202.67-2.16c1.444%200%202.475.588%202.866%201.846l-1.613.438a1.186%201.186%200%200%200-1.283-.799c-.645%200-.918.253-.918.624%200%20.598.68.685%201.665.892s2.19.644%202.19%202.164-1.03%202.18-2.741%202.18c-1.233%200-2.624-.37-3.032-1.906zm8.427-3.263v5.464h-1.696v-5.464h-2.16v-1.577h6.016v1.577zm2.897-1.604h1.716v7.068h-1.696l-.02-7.067Zm4.392%202.851h-.031v4.217h-1.696V70.19h1.716l3.005%204.123h.031v-4.139h1.696v7.083H61.52zm7.5%203.047-.428%201.17h-1.783l2.721-7.067h1.928l2.737%207.067h-1.814l-.428-1.17zm1.876-2.949c-.222-.582-.386-1.03-.397-1.03h-.026s-.175.443-.397%201.03l-.515%201.413h1.83zm6.351-1.345v5.464h-1.696v-5.464h-2.16v-1.577h6.015v1.577zm2.897-1.604h1.695v7.068H77.15zm6.123-.138a3.676%203.676%200%201%201-3.721%203.675%203.563%203.563%200%200%201%203.721-3.675m0%205.742a2.062%202.062%200%201%200-2.015-2.062%201.944%201.944%200%200%200%202.015%202.062m6.139-2.753h-.03v4.217h-1.676V70.19h1.717l3.005%204.123h.02v-4.139h1.696v7.083h-1.727zM32.86%2087.567v-.515a3.26%203.26%200%200%201-1.989.634%203.577%203.577%200%200%201-3.608-3.68%203.53%203.53%200%200%201%203.665-3.666%203.43%203.43%200%200%201%203.289%202.062l-1.676.454a1.88%201.88%200%200%200-1.696-.902c-1.139%200-1.876.85-1.876%202.062a1.943%201.943%200%200%200%202.062%202.061%202.24%202.24%200%200%200%201.799-.726v-.335h-1.804v-1.547h3.35v4.098zm8.48-3.149c0%202.128-1.226%203.288-3.092%203.288s-3.093-1.16-3.093-3.288V80.5h1.716v3.866c0%201.211.464%201.737%201.382%201.737s1.381-.515%201.381-1.737V80.5h1.675zm2.232%201.979-.422%201.17h-1.784l2.722-7.067h1.928l2.737%207.067h-1.82l-.422-1.17zm1.882-2.949c-.227-.582-.387-1.03-.397-1.03h-.031s-.17.443-.392%201.03l-.515%201.413h1.83zm6.86-2.948c2.108%200%203.727%201.438%203.727%203.567s-1.624%203.5-3.716%203.5h-3.016V80.5zm-.072%205.495c1.031%200%202.108-.516%202.108-1.928s-1.077-1.964-2.108-1.964h-1.237v3.918zm4.506-5.495h5.154v1.603h-3.474v1.211h2.577v1.366h-2.577v1.294h3.5v1.547h-5.18zm6.046%200h1.696v5.495h3.17v1.546h-4.866zm8.69-.14a3.675%203.675%200%201%201-3.721%203.676%203.556%203.556%200%200%201%203.721-3.675Zm0%205.743a2.062%202.062%200%201%200-2.02-2.062%201.94%201.94%200%200%200%202.02%202.062m10.619-1.685c0%202.128-1.232%203.288-3.093%203.288s-3.093-1.16-3.093-3.288V80.5h1.717v3.866c0%201.211.464%201.737%201.381%201.737.918%200%201.382-.515%201.382-1.737V80.5h1.675zM85.67%2080.5c1.732%200%202.784.923%202.784%202.433s-1.031%202.433-2.784%202.433h-.953v2.201h-1.691V80.5zm.047%203.392c.716%200%201.03-.371%201.03-.928s-.324-.918-1.03-.918h-1v1.846zm3.376-3.392h5.154v1.603h-3.453v1.211h2.546v1.366h-2.546v1.294h3.505v1.547h-5.206z%22%2F%3E%3Cpath%20fill%3D%22%23ffffff%22%20d%3D%22M5.99%2093.552c.041.32.33.577.845.577.412%200%20.675-.16.675-.516%200-.463-.474-.515-1.082-.623-.438-.098-.959-.273-.959-.954s.516-1.005%201.294-1.005%201.222.289%201.376.85l-.572.15c-.082-.304-.32-.49-.768-.49s-.665.16-.665.464.345.433.897.516c.443.087%201.14.257%201.14%201.03%200%20.774-.558%201.032-1.336%201.032-.572%200-1.289-.17-1.438-.933zm4.232.2-.304.815h-.66l1.35-3.459h.789l1.35%203.459h-.67l-.304-.814h-1.551Zm1.098-1.221c-.222-.598-.31-.871-.315-.882l-.335.918-.232.624h1.145zm2.747-1.423h.65v3.459h-.65zm4.67%203.459-1.763-2.464v2.464h-.634v-3.459h.665l1.763%202.418v-2.418h.65v3.459zm3.923-2.856v2.856h-.65V91.71h-1.175v-.603h2.995v.603h-1.17Zm2.453%201.377v-.573H27.5v.573zm7.057-.16v-.86l-.892%201.674h-.427l-.902-1.711v2.546h-.645V91.12h.773l.64%201.16c.221.401.345.67.35.67%200%200%20.14-.269.366-.676l.624-1.154h.727v3.458h-.614zm2.933.824-.299.815h-.665l1.356-3.459h.768l1.355%203.459h-.66l-.303-.814h-1.552Zm1.103-1.221c-.222-.598-.31-.871-.314-.882l-.335.918-.227.624h1.144zm2.748-1.423h.65v2.85h1.705v.604h-2.355zm5.196-.067a1.8%201.8%200%201%201-1.83%201.8%201.77%201.77%200%200%201%201.83-1.8m0%203a1.206%201.206%200%201%200-1.176-1.2%201.144%201.144%200%200%200%201.176%201.2m10.67.526v-.433a1.54%201.54%200%200%201-1.196.516%201.804%201.804%200%201%201%20.036-3.609%201.71%201.71%200%200%201%201.65%201.031l-.594.165a1.16%201.16%200%200%200-1.03-.593%201.13%201.13%200%200%200-1.196%201.212%201.17%201.17%200%200%200%201.273%201.211%201.46%201.46%200%200%200%201.077-.443v-.356h-1.052v-.577h1.583v1.892zm5.113-1.552c0%201.109-.582%201.624-1.546%201.624s-1.547-.515-1.547-1.624v-1.907h.665v1.97c0%20.654.284.963.877.963.592%200%20.876-.31.876-.964v-1.969h.644zm2.031.737-.304.815h-.655l1.35-3.459h.79l1.35%203.459h-.67l-.304-.814h-1.557Zm1.098-1.221c-.222-.598-.31-.871-.314-.882l-.33.918-.232.624h1.144zm4.015-1.423c1.114%200%201.923.655%201.923%201.742%200%201.088-.81%201.717-1.902%201.717h-1.289v-3.459zm0%202.856c.748%200%201.253-.346%201.253-1.114s-.516-1.139-1.273-1.139h-.614v2.248zm3.335-2.856h2.526v.603h-1.876v.794h1.417v.572h-1.417v.882h1.912v.603h-2.577zm4.047%200h.65v2.85h1.706v.604h-2.356zm5.195-.067a1.8%201.8%200%201%201-1.83%201.8%201.77%201.77%200%200%201%201.83-1.8m0%203a1.206%201.206%200%201%200-1.175-1.2%201.146%201.146%200%200%200%201.175%201.2m6.259-1.026c0%201.109-.583%201.624-1.547%201.624s-1.546-.515-1.546-1.624v-1.907h.66v1.97c0%20.654.288.963.881.963s.876-.31.876-.964v-1.969h.645l.03%201.907Zm2.803-1.907c.882%200%201.392.449%201.392%201.134%200%20.686-.515%201.129-1.392%201.129h-.577v1.196h-.65v-3.459zm0%201.722c.475%200%20.707-.227.707-.572%200-.346-.227-.578-.707-.578h-.597v1.15zm2.732-1.722h2.547v.603h-1.882v.794h1.418v.572h-1.418v.882h1.882v.603h-2.578zM48.17%2094.686l-.567-.052%202.031-3.294.546.041z%22%2F%3E%3Cdefs%20fill%3D%22none%22%3E%3ClinearGradient%20gradientUnits%3D%22userSpaceOnUse%22%20y2%3D%2210.062%22%20x2%3D%22107.041%22%20y1%3D%2289.943%22%20x1%3D%22-7.046%22%20id%3D%22ee63fb4c-1830-4ba8-864e-80778395f02c_comp-mmv1wb4b_r_comp-mm3m0qfp%22%3E%3Cstop%20stop-color%3D%22%23006E78%22%20offset%3D%22.36%22%2F%3E%3Cstop%20stop-color%3D%22%23006669%22%20offset%3D%22.88%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20gradientUnits%3D%22userSpaceOnUse%22%20y2%3D%2260.748%22%20x2%3D%2218.763%22%20y1%3D%2260.748%22%20x1%3D%2212.165%22%20id%3D%22b76e3fef-ee30-4f04-9bb7-be606762fe7c_comp-mmv1wb4b_r_comp-mm3m0qfp%22%3E%3Cstop%20stop-color%3D%22%23632114%22%2F%3E%3Cstop%20stop-color%3D%22%23A93E1B%22%20offset%3D%22.57%22%2F%3E%3Cstop%20stop-color%3D%22%23B5421D%22%20offset%3D%22.6%22%2F%3E%3Cstop%20stop-color%3D%22%23DA4E24%22%20offset%3D%22.7%22%2F%3E%3Cstop%20stop-color%3D%22%23E85227%22%20offset%3D%22.76%22%2F%3E%3Cstop%20stop-color%3D%22%23F7B03E%22%20offset%3D%221%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20gradientUnits%3D%22userSpaceOnUse%22%20y2%3D%226.072%22%20x2%3D%2218.995%22%20y1%3D%227.67%22%20x1%3D%2225.685%22%20id%3D%22fddb3550-482d-4de2-a1e4-ff7251f44c79_comp-mmv1wb4b_r_comp-mm3m0qfp%22%3E%3Cstop%20stop-color%3D%22%23053E1B%22%2F%3E%3Cstop%20stop-color%3D%22%233BA52B%22%20offset%3D%22.39%22%2F%3E%3Cstop%20stop-color%3D%22%2340A62A%22%20offset%3D%22.44%22%2F%3E%3Cstop%20stop-color%3D%22%234EA929%22%20offset%3D%22.61%22%2F%3E%3Cstop%20stop-color%3D%22%2352AB39%22%20offset%3D%22.73%22%2F%3E%3Cstop%20stop-color%3D%22%233BA530%22%20offset%3D%22.86%22%2F%3E%3Cstop%20stop-color%3D%22%233EA633%22%20offset%3D%22.87%22%2F%3E%3Cstop%20stop-color%3D%22%2348A93F%22%20offset%3D%22.92%22%2F%3E%3Cstop%20stop-color%3D%22%23078B46%22%20offset%3D%221%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20gradientUnits%3D%22userSpaceOnUse%22%20y2%3D%2259.84%22%20x2%3D%2218.902%22%20y1%3D%2259.84%22%20x1%3D%2211.587%22%20id%3D%22c3cafdf6-f6b0-4c52-a86c-b43232003b96_comp-mmv1wb4b_r_comp-mm3m0qfp%22%3E%3Cstop%20stop-color%3D%22%230A1D31%22%2F%3E%3Cstop%20stop-color%3D%22%231C2972%22%20offset%3D%22.33%22%2F%3E%3Cstop%20stop-color%3D%22%231D2D76%22%20offset%3D%22.42%22%2F%3E%3Cstop%20stop-color%3D%22%231F3A82%22%20offset%3D%22.51%22%2F%3E%3Cstop%20stop-color%3D%22%23234F95%22%20offset%3D%22.6%22%2F%3E%3Cstop%20stop-color%3D%22%232766AB%22%20offset%3D%22.68%22%2F%3E%3Cstop%20stop-color%3D%22%23BECEE0%22%20offset%3D%22.84%22%2F%3E%3Cstop%20stop-color%3D%22%23B6C6D9%22%20offset%3D%22.85%22%2F%3E%3Cstop%20stop-color%3D%22%23A1AFC4%22%20offset%3D%22.88%22%2F%3E%3Cstop%20stop-color%3D%22%237E8AA3%22%20offset%3D%22.92%22%2F%3E%3Cstop%20stop-color%3D%22%234F5775%22%20offset%3D%22.96%22%2F%3E%3Cstop%20stop-color%3D%22%231A1E42%22%20offset%3D%221%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20gradientUnits%3D%22userSpaceOnUse%22%20y2%3D%226.093%22%20x2%3D%2218.206%22%20y1%3D%229.629%22%20x1%3D%2226.866%22%20id%3D%2228b2b744-eab8-4b02-b1fd-bc1d839f2242_comp-mmv1wb4b_r_comp-mm3m0qfp%22%3E%3Cstop%20stop-color%3D%22%230A1D31%22%2F%3E%3Cstop%20stop-color%3D%22%234EA8D9%22%20offset%3D%22.33%22%2F%3E%3Cstop%20stop-color%3D%22%234AA7D9%22%20offset%3D%22.44%22%2F%3E%3Cstop%20stop-color%3D%22%233DA5D8%22%20offset%3D%22.56%22%2F%3E%3Cstop%20stop-color%3D%22%232AA2D7%22%20offset%3D%22.68%22%2F%3E%3Cstop%20stop-color%3D%22%23C2E2D8%22%20offset%3D%22.84%22%2F%3E%3Cstop%20stop-color%3D%22%23BBDAD5%22%20offset%3D%22.86%22%2F%3E%3Cstop%20stop-color%3D%22%23A6C3CB%22%20offset%3D%22.89%22%2F%3E%3Cstop%20stop-color%3D%22%23859EBC%22%20offset%3D%22.94%22%2F%3E%3Cstop%20stop-color%3D%22%23576BA8%22%20offset%3D%22.99%22%2F%3E%3Cstop%20stop-color%3D%22%234B5DA2%22%20offset%3D%221%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20gradientUnits%3D%22userSpaceOnUse%22%20y2%3D%2217.727%22%20x2%3D%2235.149%22%20y1%3D%2242.794%22%20x1%3D%22-.66%22%20id%3D%22ef65524b-f297-4c02-acd0-001252a980c0_comp-mmv1wb4b_r_comp-mm3m0qfp%22%3E%3Cstop%20stop-color%3D%22%2398191B%22%2F%3E%3Cstop%20stop-color%3D%22%23B84A1D%22%20offset%3D%22.07%22%2F%3E%3Cstop%20stop-color%3D%22%23D3751F%22%20offset%3D%22.13%22%2F%3E%3Cstop%20stop-color%3D%22%23E79321%22%20offset%3D%22.19%22%2F%3E%3Cstop%20stop-color%3D%22%23F3A522%22%20offset%3D%22.24%22%2F%3E%3Cstop%20stop-color%3D%22%23F7AC22%22%20offset%3D%22.27%22%2F%3E%3Cstop%20stop-color%3D%22%23FBD725%22%20offset%3D%22.55%22%2F%3E%3Cstop%20stop-color%3D%22%23FBE25C%22%20offset%3D%22.62%22%2F%3E%3Cstop%20stop-color%3D%22%23FBEB88%22%20offset%3D%22.69%22%2F%3E%3Cstop%20stop-color%3D%22%23FBF1A7%22%20offset%3D%22.75%22%2F%3E%3Cstop%20stop-color%3D%22%23FBF5BA%22%20offset%3D%22.8%22%2F%3E%3Cstop%20stop-color%3D%22%23FBF6C1%22%20offset%3D%22.84%22%2F%3E%3Cstop%20stop-color%3D%22%23FBEF9C%22%20offset%3D%22.86%22%2F%3E%3Cstop%20stop-color%3D%22%23FBD723%22%20offset%3D%22.92%22%2F%3E%3Cstop%20stop-color%3D%22%23F8BD22%22%20offset%3D%22.95%22%2F%3E%3Cstop%20stop-color%3D%22%23F6AA22%22%20offset%3D%22.98%22%2F%3E%3Cstop%20stop-color%3D%22%23F5A322%22%20offset%3D%221%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20gradientUnits%3D%22userSpaceOnUse%22%20y2%3D%224801.36%22%20x2%3D%223376.32%22%20y1%3D%226202.7%22%20x1%3D%22829.373%22%20id%3D%227273e887-29b7-440b-b1cb-161465f93b4f_comp-mmv1wb4b_r_comp-mm3m0qfp%22%3E%3Cstop%20stop-color%3D%22%230A1D31%22%2F%3E%3Cstop%20stop-color%3D%22%234EA8D9%22%20offset%3D%22.33%22%2F%3E%3Cstop%20stop-color%3D%22%234AA7D9%22%20offset%3D%22.44%22%2F%3E%3Cstop%20stop-color%3D%22%233DA5D8%22%20offset%3D%22.56%22%2F%3E%3Cstop%20stop-color%3D%22%232AA2D7%22%20offset%3D%22.68%22%2F%3E%3Cstop%20stop-color%3D%22%23C2E2D8%22%20offset%3D%22.84%22%2F%3E%3Cstop%20stop-color%3D%22%23BBDAD5%22%20offset%3D%22.86%22%2F%3E%3Cstop%20stop-color%3D%22%23A6C3CB%22%20offset%3D%22.89%22%2F%3E%3Cstop%20stop-color%3D%22%23859EBC%22%20offset%3D%22.94%22%2F%3E%3Cstop%20stop-color%3D%22%23576BA8%22%20offset%3D%22.99%22%2F%3E%3Cstop%20stop-color%3D%22%234B5DA2%22%20offset%3D%221%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20gradientUnits%3D%22userSpaceOnUse%22%20y2%3D%224867.67%22%20x2%3D%223040.98%22%20y1%3D%225811.13%22%20x1%3D%22669.781%22%20id%3D%220932f294-0251-451e-9a6a-6cd24f2ff8dd_comp-mmv1wb4b_r_comp-mm3m0qfp%22%3E%3Cstop%20stop-color%3D%22%23053E1B%22%2F%3E%3Cstop%20stop-color%3D%22%233BA52B%22%20offset%3D%22.39%22%2F%3E%3Cstop%20stop-color%3D%22%2340A62A%22%20offset%3D%22.44%22%2F%3E%3Cstop%20stop-color%3D%22%234EA929%22%20offset%3D%22.61%22%2F%3E%3Cstop%20stop-color%3D%22%2352AB39%22%20offset%3D%22.73%22%2F%3E%3Cstop%20stop-color%3D%22%233BA530%22%20offset%3D%22.86%22%2F%3E%3Cstop%20stop-color%3D%22%233EA633%22%20offset%3D%22.87%22%2F%3E%3Cstop%20stop-color%3D%22%2348A93F%22%20offset%3D%22.92%22%2F%3E%3Cstop%20stop-color%3D%22%23078B46%22%20offset%3D%221%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3C%2Fg%3E%3C%2Fsvg%3E';

  var CSS = [
    


    "@font-face{font-family:'Varien';font-style:normal;font-weight:400;font-display:swap;",
    "src:url('https://static.wixstatic.com/ufonts/5fefd8_af84a32872e54b0dbdf0bf5c76f52c89/woff2/file.woff2') format('woff2')}",
    "@font-face{font-family:'Varien';font-style:italic;font-weight:400;font-display:swap;",
    "src:url('https://static.wixstatic.com/ufonts/5fefd8_1e5b9ef92f5440db968e5ef2f46acb27/woff2/file.woff2') format('woff2')}",

    'rdr-console{',
    '--navy:#0A1A35;--teal:#00676E;--teal-soft:#E4F0F0;--line:#E1E6EE;--line-2:#EEF2F7;',
    '--ink:#16233A;--ink-2:#45536E;--ink-3:#7B8AA0;--bg:#EEF2F7;',
    '--ok:#1E8E5A;--no:#C0392B;--warn:#B3541E;--amber:#F19F39;--teal-lite:#5DBFC0;',
    "--body:'Montserrat',system-ui,-apple-system,sans-serif;",
    "--display:'Varien',Georgia,serif;",
    




    'display:block;font-family:var(--body);color:var(--ink);font-size:13px;',
    'padding:0 clamp(8px,2vw,24px)}',
    'rdr-console *{box-sizing:border-box}',

    










    '.rdrc-app{background:#fff;border:1px solid #D7DEE9;border-radius:14px;overflow:hidden;',
    'max-width:1180px;margin-inline:auto;',
    'box-shadow:0 1px 2px rgba(10,26,53,.05),0 10px 30px -12px rgba(10,26,53,.22)}',

    

    '.rdrc-bar{display:flex;align-items:center;gap:16px;flex-wrap:wrap;padding:13px 18px;',
    'background:var(--navy);border-bottom:2px solid var(--amber)}',
    '.rdrc-brand{display:flex;align-items:center;gap:12px;min-width:0;flex:1}',
    


    '.rdrc-logo{flex:0 0 auto;width:52px;height:52px;border-radius:12px 3px 12px 3px;display:block;object-fit:contain}',
    '.rdrc-mark{flex:0 0 auto;width:52px;height:52px;border-radius:12px 3px 12px 3px;background:#12294A;color:var(--amber);',
    'display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;letter-spacing:.04em}',
    '.rdrc-kick{font-size:9px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:var(--teal-lite);margin:0 0 3px}',
    '.rdrc-brand-t{font-family:var(--display);font-style:italic;text-transform:uppercase;font-size:20px;',
    'line-height:1;letter-spacing:.005em;color:#fff;margin:0;display:flex;align-items:baseline;gap:8px;flex-wrap:wrap}',
    '.rdrc-brand-sep{color:rgba(255,255,255,.28);font-style:normal}',
    '.rdrc-brand-dest{color:var(--amber)}',
    '.rdrc-bar-r{display:flex;align-items:center;gap:10px;flex:0 0 auto}',
    '.rdrc-stamp{font-size:11px;color:rgba(255,255,255,.55);font-weight:600}',
    

    '.rdrc-stamp.is-perime{display:inline-flex;align-items:center;gap:6px;color:#FFCF6B;font-weight:700}',
    '.rdrc-stamp.is-perime svg{width:14px;height:14px;flex:0 0 auto}',

     
    '.rdrc-alerte{display:flex;align-items:flex-start;gap:11px;margin:0 0 14px;padding:12px 15px;',
    'background:#FFF6E6;border:1px solid #F0D398;border-radius:10px;font-size:12px;line-height:1.55;color:var(--ink-2)}',
    '.rdrc-alerte b{color:var(--navy);display:block}',
    '.rdrc-alerte b:not(:first-child){display:inline}',
    '.rdrc-alerte-ic{flex:0 0 auto;color:var(--warn)}',
    '.rdrc-alerte-ic svg{width:17px;height:17px;display:block}',
    '.rdrc-alerte.is-depasse{background:#FCEDEB;border-color:#F2C4BE}',
    '.rdrc-alerte.is-depasse .rdrc-alerte-ic{color:var(--no)}',
     
    '.rdrc-refresh{border:1px solid rgba(255,255,255,.22);background:transparent;color:rgba(255,255,255,.88);',
    'font:inherit;font-size:12px;font-weight:700;padding:7px 13px;border-radius:9px;cursor:pointer}',
    '.rdrc-refresh:hover{background:rgba(255,255,255,.1);color:#fff;border-color:rgba(255,255,255,.4)}',
    '.rdrc-refresh:disabled{opacity:.4;cursor:default}',
    '.rdrc-refresh:focus-visible,.rdrc-export:focus-visible{outline:2px solid var(--amber);outline-offset:2px}',

    







    '.rdrc-nav{display:flex;gap:2px;padding:0 10px;border-bottom:1px solid var(--line);background:var(--bg);',
    'overflow-x:auto;overflow-y:hidden;scrollbar-width:none;-ms-overflow-style:none}',
    '.rdrc-nav::-webkit-scrollbar{display:none}',
    '.rdrc-tab{position:relative;border:0;background:none;font:inherit;font-size:12.5px;font-weight:700;color:var(--ink-3);',
    'padding:11px 14px 10px;cursor:pointer;white-space:nowrap;display:inline-flex;align-items:center;gap:7px;',
    'border-bottom:2px solid transparent;margin-bottom:-1px}',
    '.rdrc-tab:hover{color:var(--navy)}',
    '.rdrc-tab[aria-selected="true"]{color:var(--navy);border-bottom-color:var(--teal)}',
    '.rdrc-tab[disabled]{opacity:.45;cursor:default}',
    '.rdrc-tab:focus-visible{outline:2px solid var(--teal);outline-offset:-2px}',
    '.rdrc-badge{font-size:10px;font-weight:800;line-height:1;padding:3px 6px;border-radius:999px;background:var(--no);color:#fff}',
    '.rdrc-badge[data-zero="1"]{background:var(--line);color:var(--ink-3)}',
    '.rdrc-soon{font-size:9px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:var(--ink-3)}',

    

    '.rdrc-body{padding:18px;background:var(--bg)}',
    '.rdrc-state{padding:44px 18px;text-align:center;color:var(--ink-3);font-size:13px}',
    '.rdrc-state b{display:block;color:var(--navy);font-size:15px;margin-bottom:5px}',
    '.rdrc-err{padding:14px 16px;color:var(--no);font-size:13px;font-weight:600;background:#FCEDEB;',
    'border:1px solid #F2C4BE;border-radius:10px}',

     
    '.rdrc-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}',
    '.rdrc-card{background:#fff;border:1px solid #DCE3ED;border-radius:12px;padding:14px 15px 15px;min-width:0;',
    'box-shadow:0 1px 2px rgba(10,26,53,.05)}',
    '.rdrc-card--wide{grid-column:1 / -1}',
    '.rdrc-card-h{display:flex;align-items:baseline;justify-content:space-between;gap:10px;margin:0 0 12px}',
    '.rdrc-card-t{font-size:12.5px;font-weight:800;color:var(--navy);margin:0}',
    '.rdrc-card-s{font-size:10.5px;color:var(--ink-3);font-weight:600;text-align:right}',

     
    



    '.rdrc-kpis{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:10px;margin-bottom:16px}',
    '.rdrc-kpi{position:relative;overflow:hidden;border:1px solid #DCE3ED;border-radius:12px 3px 12px 3px;',
    'padding:13px 14px 12px;min-width:0;background:#fff;box-shadow:0 1px 2px rgba(10,26,53,.05)}',
    '.rdrc-kpi::before{content:"";position:absolute;inset:0 0 auto 0;height:3px;background:var(--teal);opacity:.55}',
    '.rdrc-kpi-l{font-size:9.5px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:var(--ink-3);margin:0 0 7px}',
    '.rdrc-kpi-line{display:flex;align-items:baseline;gap:3px}',
    '.rdrc-kpi-v{font-size:27px;font-weight:800;color:var(--navy);line-height:1;font-variant-numeric:tabular-nums;letter-spacing:-.02em}',
    '.rdrc-kpi-u{font-size:12px;font-weight:700;color:var(--ink-3)}',
    '.rdrc-kpi-sub{font-size:10.5px;color:var(--ink-3);font-weight:600;margin-top:6px;line-height:1.4}',
    '.rdrc-kpi-sub b{color:var(--teal)}',
    '.rdrc-kpi--lead{background:var(--navy);border-color:var(--navy)}',
    '.rdrc-kpi--lead::before{background:#FCF150;opacity:1}',
    '.rdrc-kpi--lead .rdrc-kpi-l{color:rgba(255,255,255,.62)}',
    '.rdrc-kpi--lead .rdrc-kpi-v{color:#fff}',
    '.rdrc-kpi--lead .rdrc-kpi-u{color:rgba(255,255,255,.55)}',
    '.rdrc-kpi--lead .rdrc-kpi-sub{color:rgba(255,255,255,.7)}',
    '.rdrc-kpi--lead .rdrc-kpi-sub b{color:#FCF150}',
    '.rdrc-kpi--alert::before{background:var(--no);opacity:1}',
    '.rdrc-kpi--alert .rdrc-kpi-v{color:var(--no)}',

     
    '.rdrc-hb{display:flex;flex-direction:column;gap:1px}',
    '.rdrc-hb-row{display:grid;grid-template-columns:minmax(78px,auto) 1fr auto;align-items:center;gap:10px;',
    'padding:5px 7px;border-radius:7px 2px 7px 2px}',
    '.rdrc-hb-row:nth-child(odd){background:var(--bg)}',
    '.rdrc-hb-row.is-lead{background:var(--teal-soft)}',
    '.rdrc-hb-row.is-lead .rdrc-hb-l,.rdrc-hb-row.is-lead .rdrc-hb-v{color:var(--navy);font-weight:800}',
    '.rdrc-hb-l{font-size:11.5px;font-weight:700;color:var(--ink-2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
    '.rdrc-hb-t{height:8px;border-radius:4px;background:rgba(10,26,53,.07);overflow:hidden;min-width:0}',
    '.rdrc-hb-f{height:100%;border-radius:4px;background:var(--teal);display:block}',
    '.rdrc-hb-v{font-size:11.5px;font-weight:800;color:var(--navy);font-variant-numeric:tabular-nums;white-space:nowrap}',
    '.rdrc-hb-v i{font-style:normal;font-weight:600;color:var(--ink-3);margin-left:5px}',
    '.rdrc-hb-row.is-zero .rdrc-hb-l,.rdrc-hb-row.is-zero .rdrc-hb-v{color:var(--ink-3);font-weight:600}',

     
    '.rdrc-chart{width:100%;height:auto;display:block;overflow:visible}',
    '.rdrc-chart .grid{stroke:rgba(10,26,53,.09);stroke-width:1}',
    '.rdrc-chart .axis{font-size:8px;font-weight:700;fill:var(--ink-3);font-family:var(--body)}',
    '.rdrc-chart .bar{fill:var(--teal)}',
    '.rdrc-chart .bar-peak{fill:var(--navy)}',
    '.rdrc-chart .bar-empty{fill:rgba(10,26,53,.08)}',
    '.rdrc-chart .lbl{font-size:8.5px;font-weight:700;fill:var(--ink-3);font-family:var(--body)}',
    '.rdrc-chart .lbl-last{fill:var(--navy);font-weight:800}',
    '.rdrc-chart .val{font-size:9px;font-weight:800;fill:var(--ink-2);font-family:var(--body)}',
    '.rdrc-chart .val-peak{fill:var(--navy)}',
    '.rdrc-chart .area{fill:url(#rdrcArea)}',
    '.rdrc-chart .line{fill:none;stroke:var(--teal);stroke-width:2.4;stroke-linejoin:round;stroke-linecap:round}',
    '.rdrc-chart .dot{fill:var(--teal)}',
    '.rdrc-chart .dot-ghost{fill:transparent}',
    '.rdrc-chart .dot-last{fill:var(--navy);stroke:#fff;stroke-width:2.4}',

    


    '.rdrc-seg-row{display:flex;align-items:center;justify-content:space-between;gap:14px;flex-wrap:wrap;margin:0 0 14px}',
    '.rdrc-seg{display:inline-flex;gap:2px;padding:3px;background:rgba(10,26,53,.07);border-radius:999px}',
    '.rdrc-seg button{appearance:none;-webkit-appearance:none;border:0;background:transparent;font:700 12.5px/1 var(--body);' +
      'color:var(--ink-2);padding:9px 15px;border-radius:999px;cursor:pointer;letter-spacing:.02em;transition:background .15s,color .15s}',
    '.rdrc-seg button:hover:not([aria-pressed="true"]){background:rgba(255,255,255,.7);color:var(--navy)}',
    '.rdrc-seg button[aria-pressed="true"]{background:var(--navy);color:#fff;box-shadow:0 3px 8px -3px rgba(10,26,53,.55)}',
    '.rdrc-seg button:focus-visible{outline:2px solid var(--teal);outline-offset:2px}',
    '.rdrc-seg-note{font:600 12px/1.45 var(--body);color:var(--ink-3);margin:0;max-width:46ch}',

    


    '.rdrc-tell{background:var(--navy);border-radius:16px;padding:20px 22px;margin:0 0 14px}',
    '.rdrc-tell-h{display:flex;align-items:center;gap:9px;margin:0 0 13px}',
    '.rdrc-tell-h svg{width:17px;height:17px;flex:none;color:#E0A83B}',
    '.rdrc-tell-h span{font:800 11px/1 var(--body);letter-spacing:.15em;text-transform:uppercase;color:#E0A83B}',
    '.rdrc-tell ul{list-style:none;margin:0;padding:0;display:grid;gap:10px}',
    '.rdrc-tell li{font:500 14.5px/1.55 var(--body);color:rgba(255,255,255,.9);padding-left:19px;position:relative}',
    '.rdrc-tell li::before{content:"";position:absolute;left:0;top:.62em;width:7px;height:7px;border-radius:50%;background:#E0A83B}',
    '.rdrc-tell b{font-weight:800;color:#fff}',

     
    '.rdrc-card-ic{flex:0 0 auto;width:26px;height:26px;border-radius:8px 3px 8px 3px;background:var(--navy);',
    'color:#FCF150;display:grid;place-items:center}',
    '.rdrc-card-ic svg{width:14px;height:14px}',

     
    '.rdrc-sub{display:inline-flex;gap:4px;padding:4px;margin-bottom:16px;background:#E3E9F1;',
    'border:1px solid var(--line);border-radius:10px}',
    '.rdrc-subtab{border:0;background:none;font:inherit;font-size:12px;font-weight:700;color:var(--ink-3);',
    'padding:7px 13px;border-radius:8px;cursor:pointer;display:inline-flex;align-items:center;gap:7px}',
    '.rdrc-subtab:hover{color:var(--navy)}',
    '.rdrc-subtab[aria-selected="true"]{background:var(--navy);color:#fff;box-shadow:0 2px 6px rgba(10,26,53,.28)}',
    '.rdrc-subtab:focus-visible{outline:2px solid var(--teal);outline-offset:-2px}',
    '.rdrc-subn{font-size:10px;font-weight:800;line-height:1;padding:3px 6px;border-radius:999px;',
    'background:rgba(10,26,53,.08);color:var(--ink-2)}',
    '.rdrc-subtab[aria-selected="true"] .rdrc-subn{background:rgba(255,255,255,.22);color:#fff}',
    '.rdrc-tick{flex:0 0 auto;width:22px;height:22px;border-radius:50%;display:grid;place-items:center;',
    'background:rgba(30,142,90,.12);color:var(--ok)}',
    '.rdrc-tick svg{width:12px;height:12px}',

     
    '.rdrc-export{display:inline-flex;align-items:center;gap:7px;border:1px solid rgba(255,255,255,.22);background:transparent;',
    'color:rgba(255,255,255,.88);font:inherit;font-size:12px;font-weight:700;padding:7px 13px;border-radius:9px;cursor:pointer}',
    '.rdrc-export:hover{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.4);color:#fff}',
    '.rdrc-export svg{width:14px;height:14px}',
    '.rdrc-export:disabled{opacity:.35;cursor:default}',
    '.rdrc-export:disabled:hover{background:transparent;border-color:rgba(255,255,255,.22);color:rgba(255,255,255,.88)}',

     
    '.rdrc-ring{display:flex;align-items:center;gap:14px}',
    '.rdrc-ring svg{flex:0 0 auto}',
    '.rdrc-ring-bg{fill:none;stroke:rgba(10,26,53,.09);stroke-width:9}',
    '.rdrc-ring-fg{fill:none;stroke:var(--teal);stroke-width:9;stroke-linecap:round;transform:rotate(-90deg);transform-origin:50% 50%}',
    '.rdrc-ring-n{font-size:19px;font-weight:800;fill:var(--navy);font-family:var(--body);font-variant-numeric:tabular-nums}',
    '.rdrc-ring-t{font-size:12px;color:var(--ink-2);line-height:1.45;font-weight:600}',

     
    '.rdrc-split{display:flex;height:26px;border-radius:7px;overflow:hidden;background:var(--line-2)}',
    '.rdrc-split span{display:flex;align-items:center;justify-content:center;font-size:10.5px;font-weight:800;color:#fff}',
    '.rdrc-split-lg{display:flex;justify-content:space-between;margin-top:8px;font-size:11px;font-weight:700;color:var(--ink-2)}',
    '.rdrc-split-lg i{font-style:normal;display:inline-block;width:9px;height:9px;border-radius:3px;margin-right:5px}',

     
    'font-size:12.5px;line-height:1.55;color:var(--ink-2)}',
    'font-size:12px;font-weight:700;padding:8px 14px;border-radius:9px;cursor:pointer}',

    

    '.rdrc-funnel{display:flex;align-items:center;gap:14px;flex-wrap:wrap;',
    'padding:14px 16px;background:var(--teal-soft);border-radius:10px 3px 10px 3px}',
    '.rdrc-funnel-step{display:flex;flex-direction:column;gap:2px;min-width:0}',
    '.rdrc-funnel-step b{font-size:26px;font-weight:800;color:var(--navy);line-height:1;font-variant-numeric:tabular-nums}',
    '.rdrc-funnel-step span{font-size:11px;font-weight:600;color:var(--ink-2)}',
    '.rdrc-funnel-step.is-end b{color:var(--teal)}',
    '.rdrc-funnel-arrow{flex:0 0 auto;color:var(--ink-3)}',
    '.rdrc-funnel-arrow svg{width:18px;height:18px;display:block}',
    '.rdrc-funnel-rate{margin-left:auto;flex:0 0 auto;font-size:13px;font-weight:800;color:#fff;',
    'background:var(--teal);padding:6px 12px;border-radius:999px;font-variant-numeric:tabular-nums}',

     
    '.rdrc-flow{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:1px}',
    '.rdrc-flow li{display:flex;align-items:center;gap:9px;padding:7px 9px;border-radius:7px 2px 7px 2px;',
    'font-size:12px;font-weight:700;color:var(--ink-2)}',
    '.rdrc-flow li:nth-child(odd){background:var(--bg)}',
    '.rdrc-flow li svg{width:14px;height:14px;flex:0 0 auto;color:var(--ink-3)}',
    '.rdrc-flow li span:last-of-type{color:var(--teal);font-weight:800}',
    '.rdrc-flow li b{margin-left:auto;color:var(--navy);font-weight:800;font-variant-numeric:tabular-nums}',

     
    

    '.rdrc-arts{display:flex;flex-direction:column;gap:1px}',
    '.rdrc-art{display:grid;grid-template-columns:26px minmax(0,1fr) 62px 62px 52px;align-items:center;gap:10px;',
    'padding:7px 8px;border-radius:7px 2px 7px 2px;font-size:12px}',
    '.rdrc-art:nth-child(odd){background:var(--bg)}',
    '.rdrc-art.is-lead{background:var(--teal-soft)}',
    '.rdrc-art-r{font-size:11px;font-weight:800;color:var(--ink-3);text-align:center}',
    '.rdrc-art.is-lead .rdrc-art-r{color:var(--teal)}',
    '.rdrc-art-t{font-weight:700;color:var(--ink-2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}',
    '.rdrc-art.is-lead .rdrc-art-t{color:var(--navy);font-weight:800}',
    



    '.rdrc-art--libre{align-items:start;padding-top:12px;padding-bottom:12px}',
    '.rdrc-art--libre .rdrc-art-t{white-space:normal;overflow:visible;text-overflow:clip;line-height:1.5}',
    '.rdrc-art--libre .rdrc-art-s{align-self:start}',
    '.rdrc-art-v,.rdrc-art-l,.rdrc-art-s{text-align:right;font-weight:800;color:var(--navy);',
    'font-variant-numeric:tabular-nums;white-space:nowrap}',
    '.rdrc-art-l,.rdrc-art-s{color:var(--ink-2);font-weight:700}',
    '.rdrc-art i{display:block;font-style:normal;font-size:9px;font-weight:600;color:var(--ink-3);',
    'text-transform:uppercase;letter-spacing:.06em;margin-top:1px}',
    '@media(max-width:640px){.rdrc-art{grid-template-columns:22px minmax(0,1fr) 54px}',
    '.rdrc-art-l,.rdrc-art-s{display:none}}',

     
    '.rdrc-note-act{display:block;margin-top:11px}',
    '.rdrc-goto{border:1px solid var(--line);background:#fff;color:var(--navy);font:inherit;',
    'font-size:12px;font-weight:700;padding:8px 14px;border-radius:9px;cursor:pointer}',
    '.rdrc-goto:hover{background:var(--navy);border-color:var(--navy);color:#fff}',
    '.rdrc-goto:disabled{opacity:.5;cursor:default}',
    '.rdrc-goto:focus-visible{outline:2px solid var(--teal);outline-offset:2px}',

    '.rdrc-note{margin:14px 0 0;padding:11px 13px;background:#fff;border:1px solid #DCE3ED;',
    'border-radius:10px;font-size:11.5px;line-height:1.5;color:var(--ink-2)}',
    '.rdrc-note b{color:var(--navy)}',

     
    '.rdrc-help{margin:0 0 12px;font-size:11.5px;line-height:1.5;color:var(--ink-3)}',

     
    '.rdrc-methode{margin:0 0 14px;padding:13px 15px;background:#fff;border:1px solid #DCE3ED;',
    'border-left:3px solid var(--teal);border-radius:10px}',
    '.rdrc-methode-t{margin:0 0 8px;font-size:11px;font-weight:800;letter-spacing:.1em;',
    'text-transform:uppercase;color:var(--teal)}',
    '.rdrc-methode-l{margin:0;padding-left:18px;font-size:12px;line-height:1.7;color:var(--ink-2)}',
    '.rdrc-methode-l b{color:var(--navy)}',
    '.rdrc-methode-l a{color:var(--navy);font-weight:700}',
    '.rdrc-methode-l a svg{width:11px;height:11px;margin-left:3px;vertical-align:-1px}',
    '.rdrc-methode-n{margin:10px 0 0;font-size:11px;line-height:1.5;color:var(--ink-3)}',

     
    '.rdrc-pseudo-line{display:flex;align-items:center;gap:8px;flex-wrap:wrap}',
    '.rdrc-copy{display:inline-flex;align-items:center;gap:5px;border:1px solid var(--line);background:#fff;',
    'color:var(--ink-3);font:inherit;font-size:10.5px;font-weight:700;padding:4px 9px;border-radius:999px;cursor:pointer}',
    '.rdrc-copy svg{width:12px;height:12px}',
    '.rdrc-copy:hover{color:var(--navy);border-color:var(--ink-3)}',
    '.rdrc-copy:focus-visible{outline:2px solid var(--teal);outline-offset:2px}',
    '.rdrc-copy.is-done{color:var(--ok);border-color:rgba(30,142,90,.45);background:rgba(30,142,90,.08)}',
    '.rdrc-list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:10px}',
    '.rdrc-row{display:flex;align-items:center;gap:12px;flex-wrap:wrap;padding:14px 16px;background:#fff;' + 'border:1px solid #DCE3ED;border-radius:12px 3px 12px 3px;box-shadow:0 1px 2px rgba(10,26,53,.05);' + 'transition:box-shadow .16s ease,border-color .16s ease}',
    '.rdrc-row:hover{border-color:#C3CFDF;box-shadow:0 3px 10px rgba(10,26,53,.09)}',
    '.rdrc-who{flex:1 1 210px;min-width:0}',
    '.rdrc-pseudo{display:inline-flex;align-items:center;gap:7px;font-size:14px;font-weight:800;color:var(--navy);',
    'text-decoration:none;word-break:break-all}',
    '.rdrc-pseudo:hover{color:var(--teal);text-decoration:underline}',
    '.rdrc-pseudo svg{width:12px;height:12px;flex:0 0 auto;opacity:.6}',
    '.rdrc-meta{font-size:11px;color:var(--ink-3);font-weight:600;margin-top:3px}',
    '.rdrc-warn{color:var(--warn)}',
    '.rdrc-acts{flex:0 0 auto;display:flex;gap:8px}',
    '.rdrc-btn{border:1px solid var(--line);background:#fff;font:inherit;font-size:12px;font-weight:800;',
    'padding:8px 14px;border-radius:9px;cursor:pointer}',
    '.rdrc-ok{border-color:var(--ok);color:var(--ok)}.rdrc-ok:hover{background:var(--ok);color:#fff}',
    '.rdrc-no{border-color:var(--no);color:var(--no)}.rdrc-no:hover{background:var(--no);color:#fff}',
    '.rdrc-btn:disabled{opacity:.45;cursor:default}',
    '.rdrc-btn:disabled:hover{background:#fff;color:inherit}',

    






    '.rdrc-toast{display:flex;align-items:flex-start;gap:10px;margin:0;padding:11px 15px;',
    'border-bottom:1px solid var(--line);font-size:12.5px;line-height:1.5;font-weight:600;',
    'background:#E8F5EE;color:#14603D}',
    '.rdrc-toast.is-err{background:#FCEDEB;color:#8E2B20}',
    '.rdrc-toast-ic{flex:0 0 auto;margin-top:1px}',
    '.rdrc-toast-ic svg{width:16px;height:16px;display:block}',
    '.rdrc-toast-x{margin-left:auto;flex:0 0 auto;border:0;background:none;font:inherit;font-size:15px;',
    'line-height:1;color:inherit;opacity:.55;cursor:pointer;padding:2px 3px}',
    '.rdrc-toast-x:hover{opacity:1}',
    '.rdrc-toast-x:focus-visible{outline:2px solid currentColor;outline-offset:2px;border-radius:4px}',

    '@media(max-width:900px){.rdrc-kpis{grid-template-columns:repeat(2,minmax(0,1fr))}',
    '.rdrc-grid{grid-template-columns:minmax(0,1fr)}}',
     
    '.rdrc-jours{display:flex;flex-wrap:wrap;gap:6px;margin:0 0 14px}',
    '.rdrc-jour{appearance:none;border:1px solid var(--line);background:#fff;border-radius:10px;padding:7px 9px;min-width:64px;',
    'font:700 11.5px/1.2 var(--body);color:var(--ink-2);cursor:pointer;text-align:center;display:grid;gap:3px}',
    '.rdrc-jour small{font:600 10px/1 var(--body);color:var(--ink-3)}',
    '.rdrc-jour[aria-pressed="true"]{background:var(--navy);border-color:var(--navy);color:#fff}',
    '.rdrc-jour[aria-pressed="true"] small{color:rgba(255,255,255,.7)}',
    '.rdrc-jour[data-tire="1"]{border-color:var(--ok)}',
    '.rdrc-jour[data-tire="1"] small{color:var(--ok)}',
    '.rdrc-jour[aria-pressed="true"][data-tire="1"] small{color:#8CE0B5}',
    '.rdrc-mob{display:grid;grid-template-columns:42px minmax(0,1.4fr) minmax(0,1fr) 96px auto;align-items:center;gap:10px;',
    'padding:9px 10px;border:1px solid var(--line-2);border-radius:10px;background:#fff;margin:0 0 6px;font-size:12.5px}',
    '.rdrc-mob-id{font:800 10px/1.2 var(--body);color:var(--ink-3);letter-spacing:.04em}',
    '.rdrc-mob-nom{font-weight:700;color:var(--ink)}.rdrc-mob-nom small{display:block;font-weight:500;color:var(--ink-3);font-size:11px;margin-top:2px}',
    '.rdrc-mob-mode{color:var(--ink-2)}.rdrc-mob-mode a{color:var(--teal);font-weight:700;text-decoration:underline;text-underline-offset:2px;display:block;font-size:11.5px;margin-top:2px}',
    '.rdrc-mob-st{font:800 10px/1 var(--body);letter-spacing:.06em;text-transform:uppercase;padding:6px 8px;border-radius:999px;text-align:center;white-space:nowrap}',
    '.rdrc-mob-st[data-s="À vérifier"]{background:#FFF1DA;color:var(--warn)}',
    '.rdrc-mob-st[data-s="Validé"]{background:#E1F5EA;color:var(--ok)}',
    '.rdrc-mob-st[data-s="Refusé"]{background:#FBE3E0;color:var(--no)}',
    '.rdrc-mob-st[data-s="Exclue"]{background:#EEF2F7;color:var(--ink-3)}',
    '.rdrc-mob-acts{display:flex;gap:6px;justify-content:flex-end}.rdrc-mob-acts .rdrc-btn{padding:6px 10px;font-size:11px}',
    '.rdrc-mob[data-gagnant="1"]{border-color:var(--amber);background:#FFFBEE}',
    '.rdrc-mob-trophee{color:var(--amber);font-weight:800;font-size:11px}',
    '.rdrc-tirage{display:flex;flex-wrap:wrap;align-items:center;gap:12px;padding:14px;border:1px solid var(--line);border-radius:12px;background:#fff}',
    '.rdrc-tirage-t{flex:1 1 220px;font-size:13px;color:var(--ink-2)}.rdrc-tirage-t b{color:var(--ink)}',
    '.rdrc-tirage .rdrc-btn.rdrc-go{border-color:var(--navy);background:var(--navy);color:#fff}',
    '.rdrc-tirage .rdrc-btn.rdrc-go:hover{background:#12294A}',
    '.rdrc-gagnant{padding:14px;border-radius:12px;background:#FFFBEE;border:1px solid var(--amber)}',
    '.rdrc-gagnant b{font-size:15px;color:var(--ink)}.rdrc-gagnant p{margin:6px 0 0;font-size:12.5px;color:var(--ink-2)}',
    '.rdrc-gagnant .rdrc-mob-acts{justify-content:flex-start;margin-top:10px}',
    '@media(max-width:760px){.rdrc-mob{grid-template-columns:minmax(0,1fr) auto}.rdrc-mob-id,.rdrc-mob-mode{grid-column:1/-1}}',
    '@media(max-width:560px){.rdrc-body{padding:13px}.rdrc-row{align-items:flex-start}',
    '.rdrc-acts{width:100%}.rdrc-btn{flex:1}.rdrc-bar-r{width:100%;justify-content:space-between}}'
  ].join('');

  function injectStyles() {
    if (document.getElementById(STYLE_ID)) return;
    var s = document.createElement('style');
    s.id = STYLE_ID;
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  var ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  function esc(v) {
    return String(v == null ? '' : v).replace(/[&<>"']/g, function (c) { return ESCAPES[c]; });
  }

   
  function since(iso) {
    if (!iso) return '';
    var ms = Date.now() - new Date(iso).getTime();
    if (!isFinite(ms) || ms < 0) return '';
    var h = Math.floor(ms / 3600000);
    if (h < 1) return "il y a moins d'une heure";
    if (h < 24) return 'il y a ' + h + ' h';
    return 'il y a ' + Math.floor(h / 24) + ' j';
  }

  function nfmt(n) {
    var v = Number(n) || 0;
    return v.toLocaleString('fr-FR');
  }
   
   
   
   
   
  function pct(part, whole) {
    var w = Number(whole) || 0;
    if (!w) return 0;
    return Math.min(100, Math.round((Number(part) || 0) / w * 100));
  }
  function dayMonth(iso) {
    var d = new Date(iso);
    if (isNaN(d.getTime())) return '';
    return d.getDate() + '/' + (d.getMonth() + 1);
  }

  var ICON_CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>';
  var ICON_EXT = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>';

   
   
   
   
  var IC = {
    badge:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><polyline points="8.2 13.9 7 22 12 19 17 22 15.8 13.9"/></svg>',
    people: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/></svg>',
    trend:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 17 9 11 13 15 21 7"/><polyline points="15 7 21 7 21 13"/></svg>',
    boat:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18h18l-2 3H5z"/><path d="M12 3v12"/><path d="M12 5 5 15h14z"/></svg>',
    pulse:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="2 12 7 12 10 4 14 20 17 12 22 12"/></svg>',
    target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4" fill="currentColor"/></svg>',
    clock:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15.5 14"/></svg>',
    leaf:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z"/><path d="M2 21c0-3 1.9-5.4 5.1-6C9.5 14.5 12 13 13 12"/></svg>',
    down:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><polyline points="7 11 12 16 17 11"/><path d="M4 20h16"/></svg>',
    pin:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    train:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="3" width="14" height="13" rx="3"/><path d="M5 10h14"/><circle cx="8.5" cy="13" r="1"/><circle cx="15.5" cy="13" r="1"/><path d="m7 21 2-3M17 21l-2-3"/></svg>',
    swap:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 3 21 8 16 13"/><path d="M21 8H8a5 5 0 0 0-5 5"/><polyline points="8 21 3 16 8 11"/><path d="M3 16h13a5 5 0 0 0 5-5"/></svg>',
    alerte: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>',
    copy:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
    valide: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="8 12.5 11 15.5 16 9"/></svg>'
  };

   
   
   
   
   
  function barsH(rows, opts) {
    var o = opts || {};
    var max = 0;
    rows.forEach(function (r) { if (r.count > max) max = r.count; });
    var whole = o.whole || 0;
    return '<div class="rdrc-hb">' + rows.map(function (r, i) {
      var w = max ? Math.max(r.count ? 3 : 0, Math.round(r.count / max * 100)) : 0;
      var lead = i === 0 && r.count > 0;
      var color = r.color || (lead ? 'var(--navy)' : 'var(--teal)');
      var share = whole ? '<i>' + pct(r.count, whole) + '&nbsp;%</i>' : '';
      var cls = 'rdrc-hb-row' + (r.count ? '' : ' is-zero') + (lead ? ' is-lead' : '');
      return '<div class="' + cls + '">' +
          '<span class="rdrc-hb-l">' + esc(r.label) + '</span>' +
          '<span class="rdrc-hb-t"><span class="rdrc-hb-f" style="width:' + w + '%;background:' + esc(color) + '"></span></span>' +
          '<span class="rdrc-hb-v">' + nfmt(r.count) + share + '</span>' +
        '</div>';
    }).join('') + '</div>';
  }

   
   
   
  function areaChart(points, opts) {
    var o = opts || {};
    var n = points.length;
    if (!n) return '';
    var W = 460, H = 168, padB = 24, padT = 20, padL = 26, padR = 8;
    var vals = points.map(function (p) { return p.value; });
    var max = Math.max.apply(null, vals.concat([1]));
    var plotH = H - padB - padT;
    var step = n > 1 ? (W - padL - padR) / (n - 1) : 0;
    var xy = points.map(function (p, i) {
      return [padL + i * step, H - padB - (p.value / max) * plotH];
    });

    var grid = '';
    [0, 0.5, 1].forEach(function (f) {
      var y = H - padB - f * plotH;
      grid += '<line class="grid" x1="' + padL + '" y1="' + y.toFixed(1) + '" x2="' + (W - padR) + '" y2="' + y.toFixed(1) + '"/>' +
        '<text class="axis" x="' + (padL - 7) + '" y="' + (y + 3.5).toFixed(1) + '" text-anchor="end">' +
        Math.round(max * f) + '</text>';
    });

    var line = xy.map(function (c, i) { return (i ? 'L' : 'M') + c[0].toFixed(1) + ' ' + c[1].toFixed(1); }).join(' ');
    var area = line + ' L' + xy[n - 1][0].toFixed(1) + ' ' + (H - padB) + ' L' + xy[0][0].toFixed(1) + ' ' + (H - padB) + ' Z';
     
     
     
     
    var dense = n > 40;
    var dots = xy.map(function (c, i) {
      var last = i === n - 1;
      return '<circle class="dot' + (last ? ' dot-last' : (dense ? ' dot-ghost' : '')) +
        '" cx="' + c[0].toFixed(1) + '" cy="' + c[1].toFixed(1) +
        '" r="' + (last ? 4.6 : (dense ? 3.4 : 2.8)) + '"><title>' +
        esc(o.tip ? o.tip(i) : String(points[i].value)) + '</title></circle>';
    }).join('');

     
     
     
     
     
     
    var LARG_LBL = 30;
    var placeLbl = Math.max(2, Math.floor((W - padL - padR) / LARG_LBL));
    var pasLbl = Math.max(1, Math.ceil(n / placeLbl));
    var labels = points.map(function (p, i) {
      var last = i === n - 1;
      if (!last && (i % pasLbl !== 0 || (n - 1 - i) * step < LARG_LBL)) return '';
      return '<text class="lbl' + (last ? ' lbl-last' : '') + '" x="' + xy[i][0].toFixed(1) + '" y="' + (H - padB + 14) +
        '" text-anchor="middle">' + esc(o.label ? o.label(i) : '') + '</text>';
    }).join('');

    return '<svg class="rdrc-chart" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' +
      esc(o.aria || 'Évolution') + '">' +
      '<defs><linearGradient id="rdrcArea" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0%" stop-color="#00676E" stop-opacity=".26"/>' +
      '<stop offset="100%" stop-color="#00676E" stop-opacity="0"/></linearGradient></defs>' +
      grid + '<path class="area" d="' + area + '"/><path class="line" d="' + line + '"/>' + dots + labels + '</svg>';
  }

   
   
  function ring(percent, title, sub) {
    var p = Math.max(0, Math.min(100, Number(percent) || 0));
    var r = 30, c = 2 * Math.PI * r;
    return '<div class="rdrc-ring">' +
      '<svg width="76" height="76" viewBox="0 0 76 76" role="img" aria-label="' + esc(title + ' : ' + p + ' %') + '">' +
        '<circle class="rdrc-ring-bg" cx="38" cy="38" r="' + r + '"/>' +
        '<circle class="rdrc-ring-fg" cx="38" cy="38" r="' + r + '" stroke-dasharray="' +
          (c * p / 100).toFixed(1) + ' ' + c.toFixed(1) + '"/>' +
        '<text class="rdrc-ring-n" x="38" y="43" text-anchor="middle">' + p + '%</text>' +
      '</svg>' +
      '<div class="rdrc-ring-t">' + esc(sub) + '</div>' +
    '</div>';
  }

  function card(title, sub, body, wide, icon) {
    return '<section class="rdrc-card' + (wide ? ' rdrc-card--wide' : '') + '">' +
      '<div class="rdrc-card-h">' +
        (icon ? '<span class="rdrc-card-ic" aria-hidden="true">' + icon + '</span>' : '') +
        '<h3 class="rdrc-card-t">' + esc(title) + '</h3>' +
        (sub ? '<span class="rdrc-card-s">' + esc(sub) + '</span>' : '') +
      '</div>' + body + '</section>';
  }

   
   
  function kpi(label, value, unit, sub, tone) {
    var cls = 'rdrc-kpi' + (tone ? ' rdrc-kpi--' + tone : '');
    return '<div class="' + cls + '">' +
      '<p class="rdrc-kpi-l">' + esc(label) + '</p>' +
      '<div class="rdrc-kpi-line"><span class="rdrc-kpi-v">' + esc(value) + '</span>' +
      (unit ? '<span class="rdrc-kpi-u">' + esc(unit) + '</span>' : '') + '</div>' +
      (sub ? '<div class="rdrc-kpi-sub">' + sub + '</div>' : '') +
    '</div>';
  }

   
   
   
  function csvCell(v) {
    var s = String(v == null ? '' : v);
    return /[";\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
  }
  function csvDownload(filename, rows) {
     
     
    var body = rows.map(function (r) { return r.map(csvCell).join(';'); }).join('\r\n');
    var blob = new Blob(['﻿' + body], { type: 'text/csv;charset=utf-8;' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 0);
  }
  function stamp() {
    var d = new Date();
    var p = function (x) { return String(x).padStart(2, '0'); };
    return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate());
  }

  class RdrConsole extends HTMLElement {
    static get observedAttributes() { return ['payload']; }

    constructor() {
      super();
      this._payload = null;
      this._view = 'audience';
       
       
       
      this._periode = 30;
      this._instaView = 'todo';    
      this._busy = {};    
      



      this._toast = null;
      this._toastId = 0;          
      this._toastTimer = null;
    }

    connectedCallback() { injectStyles(); this._render(); }

    disconnectedCallback() {
      if (this._toastTimer) { clearTimeout(this._toastTimer); this._toastTimer = null; }
    }

    attributeChangedCallback(name, oldV, newV) {
      if (name !== 'payload' || oldV === newV) return;
      try { this._payload = newV ? JSON.parse(newV) : null; }
      catch (e) { this._payload = null; }
       
      if (this._payload && this._payload.view) this._view = this._payload.view;
      this._busy = {};    
      this._lireToast();
      this._render();
    }

    



    _lireToast() {
      var t = this._payload && this._payload.toast;
      if (!t || !t.message || t.id === this._toastId) return;
      this._toastId = t.id;
      this._toast = { message: String(t.message), type: t.type === 'error' ? 'error' : 'success' };
      if (this._toastTimer) clearTimeout(this._toastTimer);
      var self = this;
       
      this._toastTimer = setTimeout(function () { self._fermerToast(); }, 4000);
    }

    _fermerToast() {
      if (this._toastTimer) { clearTimeout(this._toastTimer); this._toastTimer = null; }
      if (!this._toast) return;
      this._toast = null;
      this._render();
    }

    _emit(name, detail) {
      this.dispatchEvent(new CustomEvent(name, { bubbles: true, composed: true, detail: detail || {} }));
    }

     
    _audienceHtml(p) {
      if (p.audienceError) return '<p class="rdrc-err">' + esc(p.audienceError) + '</p>';
      var a = p.audience;
      if (!a) return '<div class="rdrc-state">Chargement des chiffres…</div>';

      var k = a.kpi || {};
      var total = k.total || 0;
      if (!total) {
        return '<div class="rdrc-state"><b>Aucune donnée</b>La base membres est vide, ou la passe nocturne ' +
          "n'a encore rien calculé.</div>";
      }

      var kpis = '<div class="rdrc-kpis">' +
        




        kpi('Membres actifs', nfmt(total), '', k.inscrits
          ? '<b>' + nfmt(k.inscrits) + '</b> inscrits · ' + nfmt(k.dormants || 0) + ' jamais revenus'
          : pct(k.actifs, total) + ' % avec au moins une action', 'lead') +
        kpi('Profils complets', nfmt(k.profilsComplets), '', '<b>' + pct(k.profilsComplets, total) + ' %</b> de la base') +
        kpi('Instagram validés', nfmt(k.instaApproved), '',
            (k.instaPending ? '<b>' + nfmt(k.instaPending) + '</b> en attente' : 'aucune demande en attente'),
            k.instaPending > 0 ? 'alert' : '') +
        kpi('Badges par membre', (k.badgesMoyen || 0).toFixed(1), '/ ' + (k.badgeTotal || 18), 'moyenne sur toute la base') +
        kpi('Articles lus', (k.articlesMoyen || 0).toFixed(1), '', 'par membre, en moyenne') +
      '</div>';

       
       
       
       
      var dist = Array.isArray(a.distribution) ? a.distribution : [];
      var maxB = k.badgeTotal || 18;
      var PALIERS = [
        { nom: 'La totale',   de: maxB,           a: maxB,     ton: 'or'   },
        { nom: 'Tout en haut', de: maxB - 1,      a: maxB - 1, ton: 'or'   },
        { nom: 'Collectionneur', de: Math.ceil(maxB * 0.66), a: maxB - 2 },
        { nom: 'Habitué',     de: Math.ceil(maxB * 0.44), a: Math.ceil(maxB * 0.66) - 1 },
        { nom: 'Équipier',    de: Math.ceil(maxB * 0.22), a: Math.ceil(maxB * 0.44) - 1 },
        { nom: 'Mousse',      de: 1,              a: Math.ceil(maxB * 0.22) - 1 },
        { nom: 'Aucun badge', de: 0,              a: 0,        ton: 'zero' }
      ];
      var somme = function (de, a2) {
        var s = 0;
        for (var i = de; i <= a2 && i < dist.length; i++) s += (dist[i] || 0);
        return s;
      };
      var lignesPaliers = PALIERS
        .filter(function (p2) { return p2.de <= p2.a; })
        .map(function (p2) {
          var etendue = p2.de === p2.a ? p2.de + ' badge' + (p2.de > 1 ? 's' : '')
                                       : p2.de + ' à ' + p2.a + ' badges';
          return {
            label: p2.nom + ' · ' + etendue,
            count: somme(p2.de, p2.a),
             
             
            color: p2.ton === 'zero' ? 'var(--ink-3)' : (p2.ton === 'or' ? '#E0A83B' : null)
          };
        });
      var cardDist = card('Paliers de collection', 'sur ' + maxB + ' badges',
        barsH(lignesPaliers, { whole: total }) +
        '<p class="rdrc-help" style="margin:12px 0 0">Ce sont ces paliers qui décideront de la carte-trophée ' +
        'de fin de course. Un membre à 0 badge n\'a encore rien fait de mesurable, c\'est le premier chiffre ' +
        'à faire baisser.</p>',
        true, IC.badge);

      var ins = Array.isArray(a.inscriptions) ? a.inscriptions : [];
      var insTotal = ins.reduce(function (s, p2) { return s + p2.value; }, 0);
      var cardIns = card('Inscriptions par semaine',
        nfmt(insTotal) + ' sur 12 semaines',
        areaChart(ins, {
          label: function (i) { return dayMonth(ins[i].week); },
          tip: function (i) { return 'semaine du ' + dayMonth(ins[i].week) + ' : ' + ins[i].value; },
          aria: 'Inscriptions hebdomadaires sur les 12 dernières semaines'
        }), true, IC.trend);

      var badges = Array.isArray(a.badges) ? a.badges : [];
      var cardBadges = card('Badges débloqués', 'catalogue complet',
        barsH(badges.map(function (b) { return { label: b.label, count: b.count }; }), { whole: total }), false, IC.badge);

      var classes = Array.isArray(a.classes) ? a.classes : [];
      var cardClasses = classes.length
        ? card('Classe préférée', 'déduite de la navigation',
            barsH(classes.map(function (c) {
              return { label: c.nom, count: c.count, color: CLASS_COLORS[c.nom] || 'var(--teal)' };
            }), { whole: total }), false, IC.boat)
        : card('Classe préférée', '', '<div class="rdrc-state">Pas encore assez de navigation pour dégager une préférence.</div>', false, IC.boat);

      var eng = a.engagement || {};
      var cardEng = card('Engagement', 'répartition des membres',
        '<div style="display:grid;gap:14px">' +
          '<div><p class="rdrc-kpi-l">Articles lus</p>' + barsH(eng.articles || [], { whole: total }) + '</div>' +
          '<div><p class="rdrc-kpi-l">Skippers suivis</p>' + barsH(eng.skippers || [], { whole: total }) + '</div>' +
          '<div><p class="rdrc-kpi-l">Jours de connexion</p>' + barsH(eng.jours || [], { whole: total }) + '</div>' +
        '</div>', false, IC.pulse);

      var ry = a.rythme || { soir: 0, matin: 0 };
      var somme = (ry.soir || 0) + (ry.matin || 0);
      var pSoir = somme ? Math.round(ry.soir / somme * 100) : 50;
      var cardRythme = card('Rythme de visite', somme ? nfmt(somme) + ' visites situées' : '',
        somme
          ? '<div class="rdrc-split">' +
              '<span style="width:' + pSoir + '%;background:var(--navy)">' + (pSoir > 12 ? pSoir + ' %' : '') + '</span>' +
              '<span style="width:' + (100 - pSoir) + '%;background:#E0A83B">' + (100 - pSoir > 12 ? (100 - pSoir) + ' %' : '') + '</span>' +
            '</div>' +
            '<div class="rdrc-split-lg"><span><i style="background:var(--navy)"></i>Soirée</span>' +
            '<span><i style="background:#E0A83B"></i>Matin</span></div>'
          : '<div class="rdrc-state">Pas encore de visites situées dans la journée.</div>', true, IC.clock);

      var cardTaux = card('Taux de qualification', 'objectif : connaître l\'audience',
        '<div style="display:grid;gap:14px">' +
          ring(pct(k.profilsComplets, total), 'Profils complets', 'profils renseignés à 100 %') +
          ring(pct(k.instaApproved, total), 'Instagram', 'comptes Instagram validés') +
        '</div>', false, IC.target);

      var note = '<p class="rdrc-note"><b>Ce que dit cet onglet, et ce qu\'il ne dit pas.</b> Ces chiffres ' +
        'décrivent des COMPORTEMENTS : ce que les membres lisent, suivent et débloquent. Le portrait de ' +
        'l\'audience (âge, civilité, géographie, lien avec la voile) a son propre onglet <b>Profils</b>, ' +
        'et les réponses sur la venue à Saint-Malo l\'onglet <b>Village</b>.</p>' +
        (a.tronque ? '<p class="rdrc-note"><b>Lecture tronquée.</b> La base dépasse le plafond de sécurité ' +
          'de cette page : les chiffres ci-dessus portent sur un sous-ensemble.</p>' : '');

       
       
       
       
       
       
       
       
       
      return kpis + '<div class="rdrc-grid">' +
        cardIns + cardEng + cardTaux + cardDist + cardClasses + cardBadges + cardRythme +
        '</div>' + note;
    }

     
     
     
     
     
    _contenuHtml(p) {
      if (p.contenuError) return '<p class="rdrc-err">' + esc(p.contenuError) + '</p>';
      if (!p.contenu) return '<div class="rdrc-state">Chargement des chiffres d\'audience…</div>';
      var c = p.contenu;

      if (!c.configure) {
        return '<div class="rdrc-methode" style="margin-bottom:16px">' +
          '<p class="rdrc-methode-t">Une étape à faire une seule fois</p>' +
          '<ol class="rdrc-methode-l">' +
            '<li>Créer une clé API dans <b>Gérer le compte, Clés API</b>, avec la permission de lecture des statistiques du site.</li>' +
            '<li>Dans le gestionnaire de secrets du site, ajouter un secret nommé <b>RDR_ANALYTICS_KEY</b> contenant cette clé.</li>' +
            '<li>Revenir ici : la passe nocturne prendra le relais toute seule.</li>' +
          '</ol>' +
          '<p class="rdrc-methode-n">Sans cette clé, la capture nocturne ne peut pas interroger Wix. ' +
          'L\'historique déjà enregistré reste consultable ci-dessous.</p>' +
        '</div>' + this._contenuCorps(c);
      }
      return this._contenuCorps(c);
    }

     
     
     
    _periodes() {
      return [{ id: 3, label: '3 j' }, { id: 7, label: '7 j' }, { id: 30, label: '30 j' },
              { id: 90, label: '90 j' }, { id: 0, label: 'Tout' }];
    }

    






    _contenuRetenir(x) {
      var dits = [];
      var jour = x.jours === 1 ? 'jour' : 'jours';

      if (x.evol !== null && Math.abs(x.evol) >= 5) {
        dits.push('Sur ces ' + x.jours + ' ' + jour + ', <b>' + nfmt(x.sessions) + ' visites</b>, soit ' +
          nfmt(x.moyJour) + ' par jour. C\'est <b>' + (x.evol > 0 ? 'en hausse de ' + x.evol : 'en baisse de ' + Math.abs(x.evol)) +
          '&nbsp;%</b> par rapport aux ' + x.jours + ' ' + jour + ' précédents.');
      } else {
        dits.push('Sur ces ' + x.jours + ' ' + jour + ', <b>' + nfmt(x.sessions) + ' visites</b>, soit ' +
          nfmt(x.moyJour) + ' par jour' + (x.evol === null ? '.' : ', un niveau stable par rapport à la période précédente.'));
      }

      var p1 = x.prov[0];
      if (p1 && x.sessions) {
        var partP1 = pct(p1.count, x.sessions);
        var social = 0;
        x.prov.forEach(function (p) { if (/sociaux|social/i.test(p.label)) social = p.count; });
         
         
        var canal = p1.label.charAt(0).toLowerCase() + p1.label.slice(1);
        var phrase = '<b>' + partP1 + '&nbsp;% de l\'audience arrive par ' + esc(canal) + '</b>';
        if (/google|recherche/i.test(p1.label)) {
          phrase += '. Le site vit donc de son référencement, pas de sa diffusion' +
            (social ? ' : les réseaux sociaux n\'en apportent que ' + pct(social, x.sessions) + '&nbsp;%' : '') + '.';
        } else {
          phrase += ', c\'est le premier canal d\'arrivée.';
        }
        dits.push(phrase);
      }

      var mob = 0;
      x.app.forEach(function (a) { if (/mobile|téléphone/i.test(a.label)) mob = a.count; });
      if (mob && x.sessions) {
        var partMob = pct(mob, x.sessions);
        dits.push('<b>' + partMob + '&nbsp;% des visites se font sur téléphone.</b> ' +
          (partMob >= 50 ? 'La majorité du public lit debout, sur un petit écran : c\'est ce format qui doit décider des titres et du choix des images.'
                         : 'L\'ordinateur reste majoritaire, mais le mobile pèse déjà lourd dans les arbitrages de mise en page.'));
      }

       
       
      if (x.articles.length >= 3) {
        var pop = x.articles[0];
        var fidele = null;
        x.articles.slice(1).forEach(function (a) {
          if (a.scroll && a.vues >= 50 && (!fidele || a.scroll > fidele.scroll)) fidele = a;
        });
        if (pop && fidele && pop.scroll && fidele.scroll - pop.scroll >= 15) {
          dits.push('Le plus vu n\'est pas le mieux lu. <b>« ' + esc(pop.titre) +' »</b> fait ' + nfmt(pop.vues) +
            ' vues mais n\'est parcouru qu\'à ' + pop.scroll + '&nbsp;%, quand <b>« ' + esc(fidele.titre) + ' »</b> n\'en fait que ' +
            nfmt(fidele.vues) + ' et est lu à ' + fidele.scroll + '&nbsp;%. Le premier a bien accroché, le second a tenu.');
        }
      }

      if (x.pays.length) {
        var totPays = x.pays.reduce(function (s, p) { return s + p.sessions; }, 0);
        var horsFr = totPays - (x.pays[0] && /france/i.test(x.pays[0].pays) ? x.pays[0].sessions : 0);
        var gp = null, rangGp = 0;
        x.pays.forEach(function (p, i) { if (/guadeloupe/i.test(p.pays)) { gp = p; rangGp = i + 1; } });
        if (gp && rangGp <= 3) {
          dits.push('<b>La Guadeloupe est le ' + (rangGp === 1 ? '1<sup>er</sup>' : rangGp + '<sup>e</sup>') +
            ' territoire d\'audience</b> avec ' + nfmt(gp.sessions) + ' visites. La destination suit la course toute l\'année, ' +
            'pas seulement à l\'arrivée.');
        } else if (totPays && horsFr) {
          dits.push('<b>' + pct(horsFr, totPays) + '&nbsp;% de l\'audience est hors de France</b>, ce qui donne sa mesure à la version anglaise du site.');
        }
      }

      if (x.sessions && x.partMembres <= 5) {
        dits.push('Seules <b>' + x.partMembres + '&nbsp;% des visites sont connectées</b> (' + nfmt(x.sessMembres) +
          '). L\'Espace Rhum ne touche encore qu\'une frange de l\'audience : c\'est la marge de progression la plus nette.');
      }

      return dits.slice(0, 6);
    }

    _contenuCorps(c) {
      var self = this;
      var tous = c.jours || [];
      if (!tous.length) {
        return '<div class="rdrc-state"><b>Aucun historique pour l\'instant</b>' +
          'La passe nocturne le constituera. Le bouton « Rattraper l\'historique » ci-dessous ' +
          'récupère tout de suite ce que Wix conserve encore.' +
          '<div style="margin-top:16px"><button class="rdrc-goto" type="button" data-rattraper>Rattraper l\'historique</button></div></div>';
      }

       
       
       
       
       
      var demande = this._periode == null ? 30 : this._periode;
      var jours = (demande > 0 && tous.length > demande) ? tous.slice(-demande) : tous;
      var nJours = jours.length;

      var som = function (arr, f) { return arr.reduce(function (s, j) { return s + f(j); }, 0); };
      var sessTotal   = som(jours, function (j) { return j.sessions; });
      var visiteurs   = som(jours, function (j) { return j.visiteurs; });
      var vues        = som(jours, function (j) { return j.vues; });
      var sessMembres = som(jours, function (j) { return j.sessMembres; });
      var partMembres = sessTotal ? pct(sessMembres, sessTotal) : 0;
      var moyJour = nJours ? Math.round(sessTotal / nJours) : 0;

       
       
      var fusion = function (champ) {
        var acc = {};
        jours.forEach(function (j) {
          var o = j[champ] || {};
          for (var k in o) acc[k] = (acc[k] || 0) + o[k];
        });
        return Object.keys(acc).map(function (k) { return { label: k, count: acc[k] }; })
          .sort(function (a, b) { return b.count - a.count; });
      };

       
       
       
       
       
       
       
       
       
      var evol = null, baseEvol = 'pas encore de période de référence';
      var precedent = tous.slice(Math.max(0, tous.length - 2 * nJours), tous.length - nJours);
      var assez = Math.max(1, Math.ceil(nJours * 0.6));
      if (precedent.length >= assez && nJours > 0) {
        var moyAvant = som(precedent, function (j) { return j.sessions; }) / precedent.length;
        if (moyAvant > 0) {
          evol = Math.round((moyJour - moyAvant) / moyAvant * 100);
          baseEvol = 'contre ' + nfmt(Math.round(moyAvant)) + ' par jour sur les ' +
            precedent.length + (precedent.length > 1 ? ' jours précédents' : ' jour précédent');
        }
      }

      var libPeriode = demande > 0 && tous.length > demande
        ? nJours + (nJours > 1 ? ' derniers jours' : ' dernier jour')
        : 'tout l\'historique, ' + nJours + (nJours > 1 ? ' jours' : ' jour');

      var seg = '<div class="rdrc-seg-row"><div class="rdrc-seg" role="group" aria-label="Période analysée">' +
        this._periodes().map(function (pe) {
           
           
           
          var inutile = pe.id > 0 && pe.id > tous.length;
          return '<button type="button" data-periode="' + pe.id + '" aria-pressed="' +
            (pe.id === demande ? 'true' : 'false') + '"' +
            (inutile ? ' disabled title="L\'historique ne remonte pas encore si loin"' : '') +
            '>' + esc(pe.label) + '</button>';
        }).join('') + '</div>' +
        '<p class="rdrc-seg-note">Le découpage porte sur les visites, les provenances et les appareils. ' +
        'Les articles et les pays restent sur 30 jours : ils sont mesurés globalement, pas jour par jour.</p></div>';

      var kpis = '<div class="rdrc-kpis">' +
        kpi('Visites', nfmt(sessTotal), '', 'sur ' + libPeriode, 'lead') +
        kpi('Par jour', nfmt(moyJour), '', 'en moyenne sur la période') +
        kpi('Visiteurs', nfmt(visiteurs), '', nfmt(vues) + ' pages vues') +
        kpi('Tendance', evol === null ? '—' : (evol > 0 ? '+' : '') + evol, evol === null ? '' : '%',
            baseEvol, (evol !== null && evol < 0) ? 'alert' : '') +
        kpi('Part des membres', partMembres, '%',
            nfmt(sessMembres) + ' visites connectées') +
      '</div>';

      var courbe = card('Visites par jour',
        nJours ? 'du ' + jours[0].jour + ' au ' + jours[nJours - 1].jour : '',
        areaChart(jours.map(function (j) { return { week: j.jour, value: j.sessions }; }), {
          label: function (i) { return jours[i].jour.slice(8) + '/' + jours[i].jour.slice(5, 7); },
          tip: function (i) { return jours[i].jour + ' : ' + jours[i].sessions + ' visites'; },
          aria: 'Visites quotidiennes sur la période choisie'
        }), true, IC.trend);

      var prov = fusion('provenance').map(function (x) {
        return { label: CANAL_LABELS[x.label] || x.label, count: x.count };
      });
      var cardProv = card('D\'où viennent les visiteurs', nfmt(sessTotal) + ' visites',
        prov.length ? barsH(prov, { whole: sessTotal })
                    : '<div class="rdrc-state">Pas encore de données.</div>', false, IC.pin);

      var app = fusion('appareils').map(function (x) {
        return { label: APPAREIL_LABELS[x.label] || x.label, count: x.count };
      });
      var cardApp = card('Sur quel appareil', nfmt(sessTotal) + ' visites',
        app.length ? barsH(app, { whole: sessTotal })
                   : '<div class="rdrc-state">Pas encore de données.</div>', false, IC.target);

      


















      var arts = c.articles || [];
      var cardArts = card('Les articles qui marchent',
        arts.length ? (c.syntheseFenetre || 30) + ' derniers jours, période fixe' : '',
        arts.length
          ? '<div class="rdrc-arts">' + arts.map(function (a, i) {
              return '<div class="rdrc-art' + (i === 0 ? ' is-lead' : '') + '">' +
                '<span class="rdrc-art-r">' + (i + 1) + '</span>' +
                '<span class="rdrc-art-t" title="' + esc(a.titre) + '">' + esc(a.titre) + '</span>' +
                '<span class="rdrc-art-v">' +
                  (a.lecteurs ? nfmt(a.lecteurs) + '<i>lecteurs</i>'
                              : nfmt(a.vues) + '<i>vues</i>') + '</span>' +
                '<span class="rdrc-art-l">' + (a.lecture ? a.lecture + ' s' : '—') + '<i>lecture</i></span>' +
                '<span class="rdrc-art-s">' + (a.lecteurs ? nfmt(a.vues) : '—') + '<i>affichages</i></span>' +
              '</div>';
            }).join('') + '</div>' +
            '<p class="rdrc-help" style="margin:12px 0 0">' +
            (arts[0] && arts[0].lecteurs
              ? 'Un <b>lecteur</b> est une visite qui a ouvert l\'article. Un <b>affichage</b> compte aussi ' +
                'les fois où l\'article est apparu en carte, sur le hub ou l\'accueil : il y en a environ ' +
                'quatre fois plus, et c\'est normal. Le temps de lecture dit si l\'article a tenu ' +
                'ce que son titre promettait.'
              : 'Chiffres en <b>vues</b>, qui comptent aussi les affichages en carte : ils valent environ ' +
                'quatre fois le nombre de lecteurs réels. Le compte des lecteurs apparaîtra à la ' +
                'prochaine passe de nuit.') +
            '</p>'
          : '<div class="rdrc-state">Pas encore de données par article.</div>',
        true, IC.badge);

      var pays = (c.pays || []).map(function (x) { return { label: x.pays, count: x.sessions }; });
      var cardPays = card('Depuis quels pays',
        (c.syntheseFenetre || 30) + ' derniers jours, période fixe',
        pays.length ? barsH(pays, { whole: pays.reduce(function (s, x) { return s + x.count; }, 0) })
                    : '<div class="rdrc-state">Pas encore de données.</div>', true, IC.pin);

       
       
      var dits = this._contenuRetenir({
        jours: nJours, sessions: sessTotal, moyJour: moyJour, evol: evol,
        prov: prov, app: app, partMembres: partMembres, sessMembres: sessMembres,
        articles: arts, pays: c.pays || []
      });
      var retenir = dits.length
        ? '<div class="rdrc-tell"><div class="rdrc-tell-h">' + IC.pulse +
            '<span>Ce qu\'il faut retenir</span></div><ul><li>' + dits.join('</li><li>') + '</li></ul></div>'
        : '';

      var note = '<p class="rdrc-note"><b>D\'où viennent ces chiffres.</b> Ils sont mesurés par Wix sur ' +
        'l\'ensemble du site, visiteurs non connectés compris, et rangés chez nous chaque nuit. ' +
        '<b>Wix ne conserve ses propres mesures que 62 jours</b> : sans cet enregistrement, comparer novembre ' +
        'à septembre serait impossible. Cette page ne déclenche aucun appel externe, elle lit l\'historique. ' +
        'Les onglets Audience et Profils décrivent autre chose : les membres inscrits, que Wix ne connaît pas.' +
        '<span class="rdrc-note-act"><button class="rdrc-goto" type="button" data-rattraper>Rattraper l\'historique</button></span></p>';

      return seg + retenir + kpis + '<div class="rdrc-grid">' +
        courbe + cardProv + cardApp + cardArts + cardPays + '</div>' + note;
    }

     
     
     
     
     
     
     
     
    _profilsHtml(p) {
      if (p.audienceError) return '<p class="rdrc-err">' + esc(p.audienceError) + '</p>';
      if (!p.audience) return '<div class="rdrc-state">Chargement du portrait d\'audience…</div>';

      var d = p.audience.demographie || {};
      





      var total = (p.audience.kpi || {}).total || 0;
      var inscrits = (p.audience.kpi || {}).inscrits || 0;
      var base = inscrits || total;
      var baseNom = inscrits ? 'des inscrits' : 'des membres actifs';
      var ages = d.ages || [], civ = d.civilites || [], reg = d.regions || [];
      var dep = d.departements || [], voile = d.voile || [];
      var courses = d.courses || [], canaux = d.canaux || [], pays = d.pays || [];

      if (!d.agesBase && !d.civilitesBase && !d.geoBase && !d.voileBase
          && !d.coursesBase && !d.canauxBase && !d.paysBase) {
        return '<div class="rdrc-state"><b>Portrait pas encore constitué</b>' +
          'Les tranches se rangent au fil des visites, quand un membre enregistre son profil. ' +
          'Aucune n\'existe pour l\'instant.</div>';
      }

      var dominante = function (serie) {
        var vrais = serie.filter(function (x) { return x.key !== '_autres'; });
        if (!vrais.length) return null;
        return vrais.reduce(function (a, b) { return b.count > a.count ? b : a; });
      };
      var domAge = dominante(ages), domReg = dominante(reg);
       
       
      var pratiquants = voile.filter(function (x) { return x.key === 'pratiquant' || x.key === 'occasionnel'; })
                             .reduce(function (s, x) { return s + x.count; }, 0);

      var kpis = '<div class="rdrc-kpis">' +
        kpi('Profils renseignés', nfmt(d.agesBase || 0), '',
            base ? '<b>' + pct(d.agesBase || 0, base) + ' %</b> ' + baseNom +
                   (inscrits ? ' (' + nfmt(inscrits) + ')' : '') : '', 'lead') +
        kpi('Tranche dominante', domAge ? domAge.label.replace(' ans', '') : '—', domAge ? 'ans' : '',
            domAge ? pct(domAge.count, d.agesBase) + ' % des répondants' : 'pas encore de tranche') +
        kpi('Région dominante', domReg ? domReg.label : '—', '',
            domReg ? pct(domReg.count, d.geoBase) + ' % des localisés' : 'pas encore de localisation') +
        kpi('Touchent à la voile', d.voileBase ? pct(pratiquants, d.voileBase) : '—', d.voileBase ? '%' : '',
            d.voileBase ? 'sur ' + nfmt(d.voileBase) + ' réponses' : 'question pas encore répondue') +
        kpi('Hors de France', d.paysBase ? pct(d.horsFrance || 0, d.paysBase) : '—', d.paysBase ? '%' : '',
            d.paysBase ? 'sur ' + nfmt(d.paysBase) + ' résidences déclarées' : 'résidence pas encore déclarée') +
      '</div>';

      var base = function (n) { return n ? nfmt(n) + ' ' + (n > 1 ? 'répondants' : 'répondant') : 'aucun répondant'; };
      var vide = function (quoi) { return '<div class="rdrc-state">Personne n\'a encore renseigné ' + quoi + '.</div>'; };

      
















      var seuil = (d.seuil || 5);
      var toutMasque = function (serie) {
        return serie.length > 0 && serie.every(function (x) { return x.key === '_autres'; });
      };
      var attente = function (n) {
        return '<div class="rdrc-state"><b>Pas encore assez de répondants</b>' +
          'Aucune réponse n\'atteint ' + seuil + ' personnes, le seuil sous lequel une ' +
          'tranche croisée avec une autre permettrait de reconnaître quelqu\'un. ' +
          (n ? 'Les ' + nfmt(n) + ' réponses reçues sont comptées, elles ne sont ' +
               'simplement pas encore montrables.' : '') + '</div>';
      };
      

      var serieOuMot = function (serie, n, quoi, corps) {
        if (!serie.length) return vide(quoi);
        if (toutMasque(serie)) return attente(n);
        return corps();
      };

      var cardAge = card('Pyramide des âges', base(d.agesBase),
        serieOuMot(ages, d.agesBase, 'sa date de naissance', function () {
          return barsH(ages.map(function (a) { return { label: a.label, count: a.count }; }),
                       { whole: d.agesBase }); }),
        false, IC.people);

      var cardCiv = card('Civilité déclarée', base(d.civilitesBase),
        serieOuMot(civ, d.civilitesBase, 'sa civilité', function () {
          return barsH(civ.map(function (c) { return { label: c.label, count: c.count }; }),
                       { whole: d.civilitesBase }) +
            '<p class="rdrc-help" style="margin:12px 0 0">Forme d\'adresse choisie par le membre. ' +
            'Ce n\'est pas une donnée de sexe et ne doit pas être présentée comme telle.</p>'; }),
        false, IC.target);

      var cardReg = card('Régions', base(d.geoBase),
        serieOuMot(reg, d.geoBase, 'son code postal', function () {
          return barsH(reg.map(function (r) { return { label: r.label, count: r.count }; }),
                       { whole: d.geoBase }); }),
        false, IC.pin);

      



      var cardDep = card('Départements',
        (!dep.length || toutMasque(dep)) ? base(d.geoBase) : 'les ' + dep.length + ' premiers',
        serieOuMot(dep, d.geoBase, 'son code postal', function () {
          return barsH(dep.map(function (x) { return { label: x.label, count: x.count }; }),
                       { whole: d.geoBase }); }),
        false, IC.pin);

      var cardVoile = card('Lien avec la voile', base(d.voileBase),
        !voile.length
          ? '<div class="rdrc-state"><b>Question posée, pas encore de réponse</b>' +
            'Elle apparaît dans le pop-up de profil, sous le questionnaire village.</div>'
          : toutMasque(voile) ? attente(d.voileBase)
          : barsH(voile.map(function (v) { return { label: v.label, count: v.count }; }), { whole: d.voileBase }),
        true, IC.boat);

       
       
       
      var cardCourses = card('Habitude de suivi des courses', base(d.coursesBase),
        !courses.length
          ? '<div class="rdrc-state">Question posée, pas encore de réponse.</div>'
          : toutMasque(courses) ? attente(d.coursesBase)
          : barsH(courses.map(function (x) { return { label: x.label, count: x.count }; }),
                  { whole: d.coursesBase }) +
            '<p class="rdrc-help" style="margin:12px 0 0">Une réponse par personne. C\'est le chiffre qui dit si ' +
            'cette audience est native de la course au large ou propre à la Route du Rhum.</p>',
        true, IC.boat);

      var cardCanal = card('Comment ils ont connu la course', base(d.canauxBase),
        !canaux.length
          ? '<div class="rdrc-state">Question posée, pas encore de réponse.</div>'
          : toutMasque(canaux) ? attente(d.canauxBase)
          : barsH(canaux.map(function (x) { return { label: x.label, count: x.count }; }),
                  { whole: d.canauxBase }),
        false, IC.trend);

      var cardPays = card('Pays de résidence',
        d.paysBase ? base(d.paysBase) + ' · les ' + pays.length + ' premiers' : base(0),
        !pays.length
          ? '<div class="rdrc-state">Question posée, pas encore de réponse.</div>'
          : toutMasque(pays) ? attente(d.paysBase)
          : barsH(pays.map(function (x) { return { label: x.label, count: x.count }; }),
                  { whole: d.paysBase }),
        false, IC.pin);

      var note = '<p class="rdrc-note"><b>Comment ces chiffres sont obtenus.</b> La fiche du membre garde ses ' +
        'valeurs exactes ; cette page ne voit que des TRANCHES larges, rangées au moment où il enregistre son ' +
        'profil. Aucun calcul n\'est fait pendant la course, aucune donnée nominative ne remonte ici. ' +
        'Une tranche comptant moins de ' + (d.seuil || 5) + ' personnes est fondue dans « Autres » : en dessous, ' +
        'un croisement permettrait de reconnaître quelqu\'un. Les pourcentages se rapportent au nombre de ' +
        'répondants indiqué sur chaque bloc, pas à la base entière.</p>';

      return kpis + '<div class="rdrc-grid">' + cardVoile + cardCourses +
             cardAge + cardCiv + cardReg + cardDep + cardCanal + cardPays + '</div>' + note;
    }

     
     
     
     
     
     
     
    _villageHtml(p) {
      if (p.audienceError) return '<p class="rdrc-err">' + esc(p.audienceError) + '</p>';
      if (!p.audience) return '<div class="rdrc-state">Chargement des réponses…</div>';

      var vil = (p.audience && p.audience.village) || {};
      var rep = vil.repondu || 0;
      if (!rep) {
        return '<div class="rdrc-state"><b>Aucune réponse au questionnaire</b>' +
          'Les réponses arriveront au fil des visites, depuis le pop-up « Mon profil » de l\'Espace Rhum.</div>';
      }

      var att  = vil.attendus || { oui: 0, peutetre: 0 };
      var mob  = vil.mobilite || { doux: 0, voiture: 0, autre: 0, total: 0 };
      var lect = vil.lectures || 0;
      var conv = vil.convaincus || 0;
      var pDoux = mob.total ? Math.round(mob.doux / mob.total * 100) : 0;
      var tauxConv = lect ? Math.round(conv / lect * 100) : 0;

       
       
      var baseMembres = ((p.audience || {}).kpi || {}).total || 0;

      var kpis = '<div class="rdrc-kpis">' +
        kpi('Réponses', nfmt(rep), '',
            baseMembres ? '<b>' + pct(rep, baseMembres) + ' %</b> des membres ont répondu' : 'au questionnaire village',
            'lead') +
        kpi('Comptent venir', nfmt(att.oui), '',
            att.peutetre ? '<b>' + nfmt(att.peutetre) + '</b> encore indécis' : 'aucun indécis') +
        kpi('Mobilité douce', mob.total ? pDoux : '—', mob.total ? '%' : '',
            'des trajets annoncés', pDoux >= 50 ? '' : 'alert') +
        kpi('Argumentaire lu', nfmt(lect), '', lect ? 'panneau mobilité ouvert' : 'jamais ouvert') +
        kpi('Ont changé d\'avis', nfmt(conv), '',
            lect ? '<b>' + tauxConv + ' %</b> des lecteurs' : 'aucune lecture pour l\'instant') +
      '</div>';

      var cardVenue = card('Qui compte venir', nfmt(rep) + ' réponses',
        barsH((vil.venues || []).map(function (v) { return { label: v.label, count: v.count }; }),
              { whole: rep }), false, IC.pin);

      var cardTransport = card('Comment ils comptent venir',
        mob.total ? nfmt(mob.total) + ' trajets annoncés' : 'aucun trajet annoncé',
        mob.total
          ? barsH((vil.transports || []).map(function (t) { return { label: t.label, count: t.count }; }),
                  { whole: mob.total })
          : '<div class="rdrc-state">Personne n\'a encore indiqué son mode de transport.</div>',
        false, IC.train);

       
       
      var pVoit  = mob.total ? Math.round(mob.voiture / mob.total * 100) : 0;
      var pAutre = Math.max(0, 100 - pDoux - pVoit);
      var cardEmpreinte = card('Empreinte des trajets', 'part de mobilité douce',
        mob.total
          ? '<div class="rdrc-split">' +
              '<span style="width:' + pDoux + '%;background:var(--teal)">' + (pDoux > 12 ? pDoux + ' %' : '') + '</span>' +
              '<span style="width:' + pVoit + '%;background:var(--warn)">' + (pVoit > 12 ? pVoit + ' %' : '') + '</span>' +
              '<span style="width:' + pAutre + '%;background:var(--ink-3)">' + (pAutre > 12 ? pAutre + ' %' : '') + '</span>' +
            '</div>' +
            '<div class="rdrc-split-lg">' +
              '<span><i style="background:var(--teal)"></i>Douce (' + nfmt(mob.doux) + ')</span>' +
              '<span><i style="background:var(--warn)"></i>Voiture (' + nfmt(mob.voiture) + ')</span>' +
              '<span><i style="background:var(--ink-3)"></i>Autre (' + nfmt(mob.autre) + ')</span>' +
            '</div>' +
            '<p class="rdrc-help" style="margin:12px 0 0">Mobilité douce = train, covoiturage, bus ou car, vélo, à pied. ' +
            '« Autre » n\'est jamais compté comme doux : le mode n\'est pas connu.</p>'
          : '<div class="rdrc-state">Rien à mesurer tant qu\'aucun trajet n\'est annoncé.</div>',
        false, IC.leaf);

       
      var bascules = Array.isArray(vil.bascules) ? vil.bascules : [];
      var cardEffet = card('Effet de l\'argumentaire mobilité',
        lect ? nfmt(lect) + ' ' + (lect > 1 ? 'lectures' : 'lecture') : 'jamais lu',
        (lect
          ? '<div class="rdrc-funnel">' +
              '<div class="rdrc-funnel-step"><b>' + nfmt(lect) + '</b><span>ont ouvert le panneau</span></div>' +
              '<div class="rdrc-funnel-arrow" aria-hidden="true">' + IC.swap + '</div>' +
              '<div class="rdrc-funnel-step is-end"><b>' + nfmt(conv) + '</b><span>ont changé de mode</span></div>' +
              '<div class="rdrc-funnel-rate">' + tauxConv + ' %</div>' +
            '</div>'
          : '<div class="rdrc-state">Personne n\'a encore ouvert le panneau « En savoir plus ».</div>') +
        (bascules.length
          ? '<p class="rdrc-kpi-l" style="margin:14px 0 8px">Trajectoires observées</p>' +
            '<ul class="rdrc-flow">' + bascules.map(function (b) {
              return '<li><span>' + esc(b.de) + '</span>' + IC.swap + '<span>' + esc(b.vers) + '</span>' +
                     '<b>' + nfmt(b.count) + '</b></li>';
            }).join('') + '</ul>'
          : (conv
            ? '<p class="rdrc-help" style="margin:12px 0 0">Le mode de départ n\'a pas été enregistré pour ces bascules : ' +
              'il n\'est tracé que depuis la mise en place de cette mesure.</p>'
            : '')),
        true, IC.swap);

      var note = '<p class="rdrc-note"><b>Comment lire ces chiffres.</b> Ce sont des réponses déclaratives, ' +
        'données librement dans le pop-up de profil : elles indiquent une intention, pas une présence. ' +
        'Le taux de changement d\'avis se rapporte aux membres qui ont ouvert l\'argumentaire, pas à tous les ' +
        'répondants. Aucune réponse n\'est reliée à un nom dans cette page, et une demande d\'effacement les ' +
        'emporte avec le reste des préférences.</p>';

      return kpis + '<div class="rdrc-grid">' + cardEffet + cardVenue + cardTransport + cardEmpreinte + '</div>' + note;
    }

     
     
     
    _rowHtml(c, approved) {
      var pseudo = c && c.pseudo ? c.pseudo : '';
      var url = 'https://instagram.com/' + encodeURIComponent(pseudo);
      var age = since(c && c.claimedAt);
      var att = Number(c && c.attempts) || 0;
      var meta = [age, att > 1 ? att + ' envois' : ''].filter(Boolean).join(' · ');
      var busy = !!this._busy[c.memberId];
      var acts = approved
        ? '<button class="rdrc-btn rdrc-no" type="button" data-revoke="1"' + (busy ? ' disabled' : '') + '>Retirer</button>'
        : '<button class="rdrc-btn rdrc-ok" type="button" data-approve="1"' + (busy ? ' disabled' : '') + '>Valider</button>' +
          '<button class="rdrc-btn rdrc-no" type="button" data-approve="0"' + (busy ? ' disabled' : '') + '>Refuser</button>';
      return '<li class="rdrc-row" data-member="' + esc(c.memberId) + '">' +
        (approved ? '<span class="rdrc-tick" aria-hidden="true">' + ICON_CHECK + '</span>' : '') +
        '<div class="rdrc-who">' +
          '<div class="rdrc-pseudo-line">' +
            '<a class="rdrc-pseudo" href="' + esc(url) + '" target="_blank" rel="noopener noreferrer">@' + esc(pseudo) + ICON_EXT + '</a>' +
             
             
            '<button class="rdrc-copy" type="button" data-copy="' + esc(pseudo) + '" ' +
              'title="Copier le pseudo pour le coller dans la recherche des abonnés">' + IC.copy + '<span>Copier</span></button>' +
          '</div>' +
          (meta ? '<div class="rdrc-meta' + (!approved && att > 2 ? ' rdrc-warn' : '') + '">' + esc(meta) + '</div>' : '') +
        '</div>' +
        '<div class="rdrc-acts">' + acts + '</div>' +
      '</li>';
    }

     
     
     
     
     
     
     
    _methodeHtml() {
      return '<div class="rdrc-methode">' +
        '<p class="rdrc-methode-t">Comment vérifier</p>' +
        '<ol class="rdrc-methode-l">' +
          '<li>Copie le pseudo (bouton <b>Copier</b> sur la ligne).</li>' +
          '<li>Ouvre <a href="' + esc(INSTA_FOLLOWERS_URL) + '" target="_blank" rel="noopener noreferrer">' +
            'la liste des abonnés de @' + esc(INSTA_COMPTE) + ICON_EXT + '</a>, connecté au compte de la course.</li>' +
          '<li>Colle le pseudo dans le champ de recherche de cette liste : s\'il apparaît, il suit bien le compte.</li>' +
          '<li>Reviens ici et valide ou refuse.</li>' +
        '</ol>' +
        '<p class="rdrc-methode-n">Ouvrir le profil de la personne ne suffit pas : la plupart sont privés. ' +
        'Un refus n\'est pas définitif, le membre le voit dans son espace, corrige son pseudo et renvoie sa demande.</p>' +
      '</div>';
    }

     
     
     
     
    _retardHtml(claims) {
      if (!Array.isArray(claims) || !claims.length) return '';
      var maintenant = Date.now();
      var pire = 0;
      claims.forEach(function (c) {
        var t = c && c.claimedAt ? new Date(c.claimedAt).getTime() : 0;
        if (!t) return;
        var h = (maintenant - t) / 3600000;
        if (h > pire) pire = h;
      });
      if (pire < 48) return '';
      var depasse = pire >= 72;
      var jours = Math.floor(pire / 24);
      var duree = jours >= 1 ? jours + ' jour' + (jours > 1 ? 's' : '') : Math.round(pire) + ' h';
      return '<div class="rdrc-alerte' + (depasse ? ' is-depasse' : '') + '">' +
        '<span class="rdrc-alerte-ic" aria-hidden="true">' + (depasse ? IC.alerte : IC.clock) + '</span>' +
        '<div><b>' + (depasse ? 'Délai dépassé' : 'Délai bientôt atteint') + '</b>' +
        'La plus ancienne demande attend depuis <b>' + esc(duree) + '</b>. ' +
        (depasse
          ? 'La promesse faite au membre dans son espace était une réponse sous 72 h.'
          : 'Au-delà de 72 h, la promesse faite au membre dans son espace n\'est plus tenue.') +
        '</div></div>';
    }

    

















    





    _mobiliteHtml(p) {
      var self = this;
      var m = p.mobilite;
      if (p.mobiliteError) return '<div class="rdrc-state">' + esc(p.mobiliteError) + '</div>';
      if (!m) return '<div class="rdrc-state">' + (p.loading ? 'Lecture des participations…' : 'Aucune donnée pour l\'instant.') + '</div>';
      var jours = m.jours || [];
      var jourVu = this._mobJour || m.jour || (jours[0] && jours[0].jour) || '';
      var final = this._mobJour === 'final';
      var enCours = jours.find(function (j) { return j.jour === jourVu; }) || {};
      var libelle = function (jour) {
        var d = new Date(jour + 'T12:00:00Z');
        if (isNaN(d.getTime())) return jour;
        return new Intl.DateTimeFormat('fr-FR', { weekday: 'short', day: 'numeric', month: 'short', timeZone: 'UTC' }).format(d);
      };

      var chips = jours.map(function (j) {
        return '<button type="button" class="rdrc-jour" data-mob-jour="' + esc(j.jour) + '" aria-pressed="' + (!final && j.jour === jourVu ? 'true' : 'false') + '"' +
          (j.tirage ? ' data-tire="1"' : '') + '>' + esc(libelle(j.jour)) + '<small>' + (j.total || 0) + ' inscrit' + (j.total > 1 ? 's' : '') + (j.tirage ? ' · tiré' : '') + '</small></button>';
      }).join('') +
        '<button type="button" class="rdrc-jour" data-mob-jour="final" aria-pressed="' + (final ? 'true' : 'false') + '"' + (m.final ? ' data-tire="1"' : '') + '>Grand tirage<small>' + (m.eligiblesFinal || 0) + ' éligibles' + (m.final ? ' · tiré' : '') + '</small></button>';

      var kpis = '<div class="rdrc-kpis">' +
        kpi('Participations', nfmt(m.total || 0), '', 'sur les 13 jours', 'lead') +
        (final
          ? kpi('Éligibles au final', nfmt(m.eligiblesFinal || 0), '', 'justificatif validé, mode éligible')
          : kpi('Ce jour', nfmt(enCours.total || 0), '', (enCours.aVerifier || 0) + ' à vérifier') +
            kpi('Validées', nfmt(enCours.valides || 0), '', (enCours.refuses || 0) + ' refusée' + (enCours.refuses > 1 ? 's' : '')) +
            kpi('Éligibles au tirage', nfmt(enCours.eligibles || 0), '', 'ce jour', enCours.eligibles ? '' : 'alert')) +
      '</div>';

      var tirageHtml = function (t, gagnant, quoi) {
        var quand = t.effectueLe ? new Date(t.effectueLe).toLocaleString('fr-FR', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }) : '';
        var g = gagnant || {};
        return '<div class="rdrc-gagnant"><span class="rdrc-mob-trophee">🏆 ' + esc(quoi) + ' effectué le ' + esc(quand) + ' · ' + esc(t.nbEligibles) + ' éligible' + (t.nbEligibles > 1 ? 's' : '') + '</span><br>' +
          '<b>' + esc(t.gagnantNom || g.prenom + ' ' + g.nom) + '</b> <span class="rdrc-mob-id">' + esc(t.gagnantId) + '</span>' +
          (g.email ? '<p>' + esc(g.email) + ' · ' + esc(g.telephone || '') + (g.lot ? ' · lot : ' + esc(g.lot) : '') + '</p>' : '') +
          (g.id ? '<div class="rdrc-mob-acts">' +
            '<span class="rdrc-mob-st" data-s="' + (g.contactGagnant === 'Contacté' ? 'Validé' : g.contactGagnant === 'Injoignable' ? 'Refusé' : 'À vérifier') + '">' + esc(g.contactGagnant || 'À contacter') + '</span>' +
            '<button type="button" class="rdrc-btn rdrc-ok" data-mob-statut="' + esc(g.id) + '" data-champ="contactGagnant" data-valeur="Contacté">Contacté</button>' +
            '<button type="button" class="rdrc-btn rdrc-no" data-mob-statut="' + esc(g.id) + '" data-champ="contactGagnant" data-valeur="Injoignable">Injoignable</button>' +
          '</div>' : '') +
        '</div>';
      };

       
      var tirageBloc;
      var t = final ? m.final : enCours.tirage;
      var gagnantDuTirage = t ? (m.participations || []).find(function (x) { return x.id === t.gagnantId; }) : null;
      if (t && !(gagnantDuTirage && gagnantDuTirage.contactGagnant === 'Injoignable')) {
        tirageBloc = tirageHtml(t, gagnantDuTirage, final ? 'Grand tirage final' : 'Tirage du jour');
      } else {
        var n = final ? (m.eligiblesFinal || 0) : (enCours.eligibles || 0);
        var arme = this._mobConfirme === (final ? 'final' : jourVu);
        tirageBloc = (t ? tirageHtml(t, gagnantDuTirage, final ? 'Grand tirage final' : 'Tirage du jour') : '') +
          '<div class="rdrc-tirage">' +
            '<div class="rdrc-tirage-t">' + (t ? 'Le gagnant est injoignable : on peut retirer parmi les autres. ' : '') +
              (n ? '<b>' + n + '</b> participation' + (n > 1 ? 's' : '') + ' éligible' + (n > 1 ? 's' : '') + (final ? ' au grand tirage final' : ' pour ce jour') + '.'
                 : 'Aucune participation éligible' + (final ? '' : ' ce jour') + ' : validez d\'abord les justificatifs.') + '</div>' +
            (arme
              ? '<button type="button" class="rdrc-btn rdrc-go" data-mob-tirer="' + (final ? 'final' : esc(jourVu)) + '">Confirmer le tirage</button>' +
                '<button type="button" class="rdrc-btn" data-mob-annuler="1">Annuler</button>'
              : '<button type="button" class="rdrc-btn rdrc-go" data-mob-armer="' + (final ? 'final' : esc(jourVu)) + '"' + (n ? '' : ' disabled') + '>' + (final ? 'Effectuer le grand tirage final' : 'Effectuer le tirage du jour') + '</button>') +
          '</div>';
      }

      var lignes = (m.participations || []).map(function (x) {
        var inscrit = x.inscritLe ? new Date(x.inscritLe).toLocaleString('fr-FR', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }) : '';
        var statut = x.statutParticipation === 'Exclue' ? 'Exclue' : x.statutJustificatif;
        return '<div class="rdrc-mob"' + (x.gagnant ? ' data-gagnant="1"' : '') + '>' +
          '<span class="rdrc-mob-id">' + esc(x.id) + '</span>' +
          '<span class="rdrc-mob-nom">' + esc(x.prenom + ' ' + x.nom) + (x.gagnant ? ' <span class="rdrc-mob-trophee">🏆</span>' : '') +
            '<small>' + esc(x.email) + ' · ' + esc(x.telephone) + ' · inscrit le ' + esc(inscrit) + '</small></span>' +
          '<span class="rdrc-mob-mode">' + esc(x.mode) + (x.precision ? ' (' + esc(x.precision) + ')' : '') +
            (x.justificatifUrl ? '<a href="' + esc(x.justificatifUrl) + '" target="_blank" rel="noopener">Voir le justificatif' + (x.justificatifNom ? ' · ' + esc(x.justificatifNom) : '') + '</a>' : '<a>aucun fichier</a>') + '</span>' +
          '<span class="rdrc-mob-st" data-s="' + esc(statut) + '">' + esc(statut) + '</span>' +
          '<span class="rdrc-mob-acts">' +
            (x.statutJustificatif !== 'Validé' ? '<button type="button" class="rdrc-btn rdrc-ok" data-mob-statut="' + esc(x.id) + '" data-champ="statutJustificatif" data-valeur="Validé">Valider</button>' : '') +
            (x.statutJustificatif !== 'Refusé' ? '<button type="button" class="rdrc-btn rdrc-no" data-mob-statut="' + esc(x.id) + '" data-champ="statutJustificatif" data-valeur="Refusé">Refuser</button>' : '') +
            (x.statutParticipation !== 'Exclue' ? '<button type="button" class="rdrc-btn" data-mob-statut="' + esc(x.id) + '" data-champ="statutParticipation" data-valeur="Exclue" title="Écarter des tirages">Exclure</button>'
                                                : '<button type="button" class="rdrc-btn" data-mob-statut="' + esc(x.id) + '" data-champ="statutParticipation" data-valeur="Éligible">Réintégrer</button>') +
          '</span>' +
        '</div>';
      }).join('');

      var modes = Object.keys(m.modes || {}).map(function (k) { return { label: k, count: m.modes[k] }; }).sort(function (a, b) { return b.count - a.count; });

      return '<div class="rdrc-jours">' + chips + '</div>' + kpis +
        '<div class="rdrc-grid">' +
          card(final ? 'Le grand tirage final' : 'Le tirage du ' + libelle(jourVu), (m.reglages && m.reglages.ouvert) ? 'challenge ouvert' : 'challenge fermé au public', tirageBloc, true) +
          (final ? '' : card('Les participations du ' + libelle(jourVu), (enCours.total || 0) + ' inscrit' + (enCours.total > 1 ? 's' : ''),
            (lignes || '<div class="rdrc-state">Personne n\'a encore choisi ce jour.</div>') +
            '<p class="rdrc-note">Le justificatif s\'ouvre dans un nouvel onglet. « Valider » fait entrer la participation dans les tirages, « Refuser » l\'en écarte, « Exclure » l\'écarte définitivement (fraude, doublon). L\'export CSV se fait depuis le gestionnaire de contenu, collection « Mobilité · les participations ».</p>', true)) +
          card('Modes de transport déclarés', nfmt(m.total || 0) + ' participations',
            modes.length ? barsH(modes, { whole: m.total || 1 }) : '<div class="rdrc-state">Rien encore.</div>', false) +
          card('Par jour', '13 jours du village',
            jours.map(function (j) { return { label: libelle(j.jour), count: j.total || 0 }; }).some(function (x) { return x.count; })
              ? barsH(jours.map(function (j) { return { label: libelle(j.jour), count: j.total || 0 }; }), { whole: m.total || 1 })
              : '<div class="rdrc-state">Rien encore.</div>', false) +
        '</div>';
    }

    _photoHtml() {
      var decisions = [
        ['Le reglement du jeu',
         'Aucun reglement n existe a ce jour, et il en faut un pour la roue, les '
         + 'pronostics, la combativite ET le concours photo. Ce n est pas un sujet '
         + 'technique : c est une obligation des qu il y a un lot.',
         'Alexis'],
        ['Qui modere, et sur quels criteres',
         'Une photo envoyee par un visiteur ne se publie pas sans relecture. Il faut '
         + 'nommer la personne, et ecrire ce qui fait refuser une image : personnes '
         + 'reconnaissables, marques concurrentes, cadrage, qualite.',
         'Alexis'],
        ['Le traitement des donnees GPS',
         'Une photo de telephone porte la position exacte de la prise de vue dans ses '
         + 'metadonnees. Publiee telle quelle, elle revele ou etait la personne. On '
         + 'efface a la reception, ou on garde et on le dit : le premier choix est le '
         + 'seul defendable.',
         'nous, des que la regle est posee']
      ];

      var liste = decisions.map(function (x, i) {
        return '<div class="rdrc-art rdrc-art--libre">' +
          '<span class="rdrc-art-r">' + (i + 1) + '</span>' +
          '<span class="rdrc-art-t"><b>' + esc(x[0]) + '</b><br>' +
            '<span style="opacity:.7;font-weight:400">' + esc(x[1]) + '</span></span>' +
          '<span class="rdrc-art-s">' + esc(x[2]) + '<i>a trancher par</i></span>' +
        '</div>';
      }).join('');

      var suite = ['La file des photos en attente, avec l apercu, l auteur et la date',
        'Le drapeau des photos portant une position GPS, avant toute publication',
        'Accepter ou refuser, avec le motif du refus renvoye a l auteur',
        'Le compte des envois par jour, pour voir si l animation prend'
      ].map(function (t, i) {
        return '<div class="rdrc-art rdrc-art--libre"><span class="rdrc-art-r">' + (i + 1) + '</span>' +
          '<span class="rdrc-art-t">' + esc(t) + '</span></div>';
      }).join('');

      return '<div class="rdrc-grid">' +
        card('Le concours n est pas ouvert', 'et il ne peut pas l etre',
          '<div class="rdrc-state">Le module d envoi est ecrit et teste. Ce qui manque '
          + 'n est pas du code, ce sont trois decisions, listees ci-dessous. Tant '
          + 'qu elles ne sont pas prises, ouvrir le concours ferait prendre un risque '
          + 'au Groupe Telegramme et exposerait la position des participants.</div>',
          true, IC.alerte) +
        card('Ce qu il faut trancher', '3 decisions, aucune technique',
          '<div class="rdrc-arts">' + liste + '</div>' +
          '<p class="rdrc-help" style="margin:12px 0 0">L ouverture du concours n est '
          + 'pas encore datee, et ses dates sont a fixer avec ces trois reponses. '
          + 'Aucune echeance avant cela.</p>',
          true, IC.badge) +
        card('Ce que cet onglet montrera', 'une fois le concours ouvert',
          '<div class="rdrc-arts">' + suite + '</div>' +
          '<p class="rdrc-help" style="margin:12px 0 0">La file reprendra celle '
          + 'd Instagram, un onglet plus haut : c est le meme metier.</p>',
          true, IC.people) +
      '</div>';
    }

    _instaHtml(p) {
      if (p.error) return '<p class="rdrc-err">' + esc(p.error) + '</p>';
      var sub = this._instaView === 'ok' ? 'ok' : 'todo';
      var claims = Array.isArray(p.claims) ? p.claims : null;
      var approved = Array.isArray(p.approved) ? p.approved : null;

      var switcher = '<div class="rdrc-sub" role="tablist" aria-label="Vues Instagram">' +
        '<button class="rdrc-subtab" type="button" role="tab" data-insta-view="todo" aria-selected="' + (sub === 'todo') + '">' +
          'À vérifier' + (claims ? '<span class="rdrc-subn">' + claims.length + '</span>' : '') + '</button>' +
        '<button class="rdrc-subtab" type="button" role="tab" data-insta-view="ok" aria-selected="' + (sub === 'ok') + '">' +
          'Déjà validés' + (approved ? '<span class="rdrc-subn">' + approved.length + '</span>' : '') + '</button>' +
        '</div>';

      var body;
      if (sub === 'ok') {
        if (!approved) body = '<div class="rdrc-state">Chargement de la liste…</div>';
        else if (!approved.length) body = '<div class="rdrc-state"><b>Aucun compte validé</b>Les pseudos validés apparaîtront ici.</div>';
        else body = '<p class="rdrc-help">Retirer une validation fait repartir le badge Instagram du membre à la ' +
              'prochaine passe nocturne. Il repasse en « à corriger » dans son espace et peut renvoyer un pseudo.</p>' +
            '<ul class="rdrc-list">' + approved.map(function (c) { return this._rowHtml(c, true); }, this).join('') + '</ul>';
      } else {
        if (!claims) body = '<div class="rdrc-state">Chargement de la file…</div>';
        else if (!claims.length) body = '<div class="rdrc-state"><b>Rien à vérifier</b>Aucun pseudo en attente.</div>';
        else body = this._retardHtml(claims) + this._methodeHtml() +
            '<ul class="rdrc-list">' + claims.map(function (c) { return this._rowHtml(c, false); }, this).join('') + '</ul>';
      }
      return switcher + body;
    }

     
     
     
     
    _canExport(p) {
      if (this._view === 'insta') return !!(p.claims || p.approved);
      if (this._view === 'village') return !!(p.audience && p.audience.village && p.audience.village.repondu);
      if (this._view === 'contenu') return !!(p.contenu && (p.contenu.jours || []).length);
      if (this._view === 'profils') {
        var dd = (p.audience || {}).demographie;
        return !!(dd && (dd.agesBase || dd.geoBase || dd.civilitesBase || dd.voileBase));
      }
      return !!(p.audience && p.audience.kpi && p.audience.kpi.total);
    }

    _exportCsv() {
      var p = this._payload || {};
      if (!this._canExport(p)) return;

      if (this._view === 'insta') {
        var ok = this._instaView === 'ok';
        var src = (ok ? p.approved : p.claims) || [];
        var rows = [['Pseudo Instagram', 'Demande du', 'Envois', 'Statut']];
        src.forEach(function (c) {
          rows.push(['@' + (c.pseudo || ''), c.claimedAt ? c.claimedAt.slice(0, 10) : '',
                     Number(c.attempts) || 0, ok ? 'validé' : 'en attente']);
        });
        csvDownload('rdr-instagram-' + (ok ? 'valides' : 'a-verifier') + '-' + stamp() + '.csv', rows);
        return;
      }

       
      if (this._view === 'contenu') {
        var ct = p.contenu || {};
        var rc = [['Jour', 'Sessions', 'Visiteurs', 'Pages vues', 'Sessions membres', 'Sessions non membres']];
        (ct.jours || []).forEach(function (j) {
          rc.push([j.jour, j.sessions, j.visiteurs, j.vues, j.sessMembres, j.sessVisiteurs]);
        });
        rc.push([]);
        rc.push(['Provenance', 'Sessions', 'Part', '']);
        (ct.provenance || []).forEach(function (x) {
          rc.push([CANAL_LABELS[x.label] || x.label, x.count, pct(x.count, (ct.totaux || {}).sessions) + ' %', '']);
        });
        rc.push([]);
        rc.push(['Appareil', 'Sessions', 'Part', '']);
        (ct.appareils || []).forEach(function (x) {
          rc.push([APPAREIL_LABELS[x.label] || x.label, x.count, pct(x.count, (ct.totaux || {}).sessions) + ' %', '']);
        });
        rc.push([]);
        rc.push(['Article', 'Vues', 'Lecture (s)', 'Part parcourue']);
        (ct.articles || []).forEach(function (a) { rc.push([a.titre, a.vues, a.lecture, a.scroll + ' %']); });
        rc.push([]);
        rc.push(['Pays', 'Sessions', '', '']);
        (ct.pays || []).forEach(function (x) { rc.push([x.pays, x.sessions, '', '']); });
        csvDownload('rdr-audience-site-' + stamp() + '.csv', rc);
        return;
      }

       
       
       
      if (this._view === 'profils') {
        var dm = ((p.audience || {}).demographie) || {};
        var tot = ((p.audience || {}).kpi || {}).total || 0;
        var rp = [['Bloc', 'Modalité', 'Membres', 'Part des répondants']];
        var bloc = function (titre, serie, baseN) {
          rp.push([]);
          rp.push([titre, 'base : ' + (baseN || 0) + ' répondants',
                   tot ? pct(baseN || 0, tot) + ' % de la base' : '', '']);
          (serie || []).forEach(function (x) { rp.push([titre, x.label, x.count, pct(x.count, baseN) + ' %']); });
        };
        bloc('Âge', dm.ages, dm.agesBase);
        bloc('Civilité déclarée', dm.civilites, dm.civilitesBase);
        bloc('Région', dm.regions, dm.geoBase);
        bloc('Département', dm.departements, dm.geoBase);
        bloc('Lien avec la voile', dm.voile, dm.voileBase);
        bloc('Habitude de suivi des courses', dm.courses, dm.coursesBase);
        bloc('Canal de découverte', dm.canaux, dm.canauxBase);
        bloc('Pays de résidence', dm.pays, dm.paysBase);
        rp.push([]);
        rp.push(['Lecture', 'Une seule réponse par personne sur chaque question : les lignes se somment à la base', '', '']);
        rp.push(['Méthode', 'Tranches larges rangées à l\'enregistrement du profil, jamais de valeur exacte', '', '']);
        rp.push(['Anonymat', 'Toute modalité de moins de ' + (dm.seuil || 5) + ' personnes est fondue dans « Autres »', '', '']);
        csvDownload('rdr-profils-audience-' + stamp() + '.csv', rp);
        return;
      }

       
       
      if (this._view === 'village') {
        var vl = ((p.audience || {}).village) || {};
        var mb = vl.mobilite || { doux: 0, voiture: 0, autre: 0, total: 0 };
        var rv = [['Indicateur', 'Valeur', 'Détail']];
        var pv = function (l, v, d) { rv.push([l, v, d || '']); };
        pv('Réponses au questionnaire', vl.repondu, '');
        pv('Comptent venir', (vl.attendus || {}).oui || 0, pct((vl.attendus || {}).oui || 0, vl.repondu) + ' %');
        pv('Encore indécis', (vl.attendus || {}).peutetre || 0, pct((vl.attendus || {}).peutetre || 0, vl.repondu) + ' %');
        pv('Trajets annoncés', mb.total, '');
        pv('Mobilité douce', mb.doux, pct(mb.doux, mb.total) + ' %');
        pv('Voiture', mb.voiture, pct(mb.voiture, mb.total) + ' %');
        pv('Autre mode', mb.autre, pct(mb.autre, mb.total) + ' %');
        pv('Argumentaire mobilité ouvert', vl.lectures || 0, '');
        pv('Ont changé de mode après lecture', vl.convaincus || 0, pct(vl.convaincus || 0, vl.lectures || 0) + ' % des lecteurs');

        rv.push([]);
        rv.push(['Venue déclarée', 'Membres', 'Part']);
        (vl.venues || []).forEach(function (v) { rv.push([v.label, v.count, pct(v.count, vl.repondu) + ' %']); });

        rv.push([]);
        rv.push(['Mode de transport', 'Membres', 'Part']);
        (vl.transports || []).forEach(function (t) { rv.push([t.label, t.count, pct(t.count, mb.total) + ' %']); });

        rv.push([]);
        rv.push(['Trajectoire : depuis', 'vers', 'Membres']);
        (vl.bascules || []).forEach(function (b) { rv.push([b.de, b.vers, b.count]); });

        csvDownload('rdr-village-rse-' + stamp() + '.csv', rv);
        return;
      }

      var a = p.audience || {};
      var k = a.kpi || {};
      var rows2 = [['Indicateur', 'Valeur', 'Détail']];
      var push = function (l, v, d) { rows2.push([l, v, d || '']); };
      

      push('Membres inscrits', k.inscrits || '', k.inscrits ? '' : 'comptage indisponible');
      push('Membres actifs', k.total, k.inscrits ? pct(k.total, k.inscrits) + ' % des inscrits' : '');
      push('Avec au moins une action', k.actifs, pct(k.actifs, k.total) + ' % des actifs');
      push('Profils complets', k.profilsComplets, pct(k.profilsComplets, k.total) + ' %');
      push('Instagram validés', k.instaApproved, pct(k.instaApproved, k.total) + ' %');
      push('Instagram en attente', k.instaPending, '');
      push('Badges par membre', (k.badgesMoyen || 0).toFixed(2), 'sur ' + (k.badgeTotal || 18));
      push('Articles lus par membre', (k.articlesMoyen || 0).toFixed(2), '');
      push('Skippers suivis par membre', (k.skippersMoyen || 0).toFixed(2), '');
      push('Jours de connexion par membre', (k.joursMoyen || 0).toFixed(2), '');

      rows2.push([]);
      rows2.push(['Badge', 'Membres', 'Part']);
      (a.badges || []).forEach(function (b) { rows2.push([b.label, b.count, pct(b.count, k.total) + ' %']); });

      rows2.push([]);
      rows2.push(['Classe préférée', 'Membres', 'Part']);
      (a.classes || []).forEach(function (c) { rows2.push([c.nom, c.count, pct(c.count, k.total) + ' %']); });

      rows2.push([]);
      rows2.push(['Nombre de badges', 'Membres']);
      (a.distribution || []).forEach(function (v, i) { rows2.push([i, v]); });

      rows2.push([]);
      rows2.push(['Semaine du', 'Inscriptions']);
      (a.inscriptions || []).forEach(function (w) { rows2.push([w.week, w.value]); });

      var eng = a.engagement || {};
      [['Articles lus', eng.articles], ['Skippers suivis', eng.skippers], ['Jours de connexion', eng.jours]]
        .forEach(function (pair) {
          rows2.push([]);
          rows2.push([pair[0], 'Membres', 'Part']);
          (pair[1] || []).forEach(function (b) { rows2.push([b.label, b.count, pct(b.count, k.total) + ' %']); });
        });

       
       
      csvDownload('rdr-audience-' + stamp() + '.csv', rows2);
    }

     
     
    _copieDeSecours(txt, fait) {
      var z = document.createElement('textarea');
      z.value = txt;
      z.setAttribute('readonly', '');
      z.style.cssText = 'position:absolute;left:-9999px;top:0;opacity:0';
      this.appendChild(z);
      z.select();
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      this.removeChild(z);
      if (ok && typeof fait === 'function') fait();
    }

     
    _render() {
      var p = this._payload || {};
      var self = this;
      var claims = Array.isArray(p.claims) ? p.claims : [];

      var tabs = VIEWS.map(function (v) {
        var on = v.id === self._view;
        var extra = '';
        if (v.id === 'insta') {
          extra = '<span class="rdrc-badge" data-zero="' + (claims.length ? '0' : '1') + '">' + claims.length + '</span>';
        } else if (v.soon) {
          extra = '<span class="rdrc-soon">bientôt</span>';
        }
        return '<button class="rdrc-tab" type="button" role="tab" data-view="' + v.id + '"' +
          ' aria-selected="' + (on ? 'true' : 'false') + '"' + (v.soon ? ' disabled' : '') + '>' +
          esc(v.label) + extra + '</button>';
      }).join('');

       
       
      var body = this._view === 'insta' ? this._instaHtml(p)
               : this._view === 'photo' ? this._photoHtml()
               : this._view === 'village' ? this._villageHtml(p)
               : this._view === 'profils' ? this._profilsHtml(p)
               : this._view === 'contenu' ? this._contenuHtml(p)
               : this._view === 'mobilite' ? this._mobiliteHtml(p)
               : this._audienceHtml(p);

       
       
       
       
      var perime = false;
      if (p.audience && p.audience.generatedAt) {
        var age = (Date.now() - new Date(p.audience.generatedAt).getTime()) / 3600000;
        perime = age > 30;
      }

      var stamp = '';
      if (this._view === 'contenu') {
        stamp = p.contenu && p.contenu.calculeLe ? 'Instantané ' + since(p.contenu.calculeLe) : '';
      } else if (this._view !== 'insta' && p.audience && p.audience.generatedAt) {
        stamp = 'Calculé ' + since(p.audience.generatedAt);
      } else if (this._view === 'insta' && claims.length) {
        stamp = claims.length + (claims.length > 1 ? ' demandes en attente' : ' demande en attente');
      }

      this.innerHTML =
        '<div class="rdrc-app">' +
          '<div class="rdrc-bar">' +
            '<div class="rdrc-brand">' +
              (RDR_LOGO
                ? '<img class="rdrc-logo" src="' + esc(RDR_LOGO) + '" alt="Route du Rhum, Destination Guadeloupe" width="52" height="52" decoding="async">'
                : '<span class="rdrc-mark" aria-hidden="true">RDR</span>') +
              '<div><p class="rdrc-kick">Console interne</p>' +
              '<h1 class="rdrc-brand-t"><span>Route du Rhum 2026</span>' +
              '<span class="rdrc-brand-sep" aria-hidden="true">|</span>' +
              '<span class="rdrc-brand-dest">Destination Guadeloupe</span></h1></div>' +
            '</div>' +
            '<div class="rdrc-bar-r">' +
              (stamp ? '<span class="rdrc-stamp' + (perime ? ' is-perime' : '') + '"' +
                (perime ? ' title="Les chiffres datent de plus de 30 h : la passe nocturne n\'a probablement pas tourné."' : '') +
                '>' + (perime ? IC.alerte : '') + esc(stamp) + '</span>' : '') +
              '<button class="rdrc-export" type="button" data-export' + (this._canExport(p) ? '' : ' disabled') + '>' +
                IC.down + '<span>Exporter</span></button>' +
              '<button class="rdrc-refresh" type="button" data-refresh' + (p.loading ? ' disabled' : '') + '>' +
                (p.loading ? 'Actualisation…' : 'Actualiser') + '</button>' +
            '</div>' +
          '</div>' +
          


          (this._toast
            ? '<div class="rdrc-toast' + (this._toast.type === 'error' ? ' is-err' : '') + '"' +
              ' role="' + (this._toast.type === 'error' ? 'alert' : 'status') + '">' +
              '<span class="rdrc-toast-ic" aria-hidden="true">' +
                (this._toast.type === 'error' ? IC.alerte : IC.valide) + '</span>' +
              '<span>' + esc(this._toast.message) + '</span>' +
              '<button class="rdrc-toast-x" type="button" data-toast-x aria-label="Fermer ce message">✕</button>' +
            '</div>'
            : '') +
          '<div class="rdrc-nav" role="tablist" aria-label="Panneaux de la console">' + tabs + '</div>' +
          '<div class="rdrc-body" role="tabpanel">' + body + '</div>' +
        '</div>';

      this._wire();
    }

    _wire() {
      var self = this;

       
      this.querySelectorAll('[data-mob-jour]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var j = btn.getAttribute('data-mob-jour');
          self._mobJour = j;
          self._mobConfirme = null;
          self._render();
          if (j !== 'final') self._emit('rc-mob-jour', { jour: j });
        });
      });
      this.querySelectorAll('[data-mob-armer]').forEach(function (btn) {
        btn.addEventListener('click', function () { self._mobConfirme = btn.getAttribute('data-mob-armer'); self._render(); });
      });
      this.querySelectorAll('[data-mob-annuler]').forEach(function (btn) {
        btn.addEventListener('click', function () { self._mobConfirme = null; self._render(); });
      });
      this.querySelectorAll('[data-mob-tirer]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var quoi = btn.getAttribute('data-mob-tirer');
          self._mobConfirme = null;
          btn.disabled = true;
          self._emit('rc-mob-tirage', quoi === 'final' ? { final: true } : { jour: quoi });
        });
      });
      this.querySelectorAll('[data-mob-statut]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          btn.disabled = true;
          self._emit('rc-mob-statut', { id: btn.getAttribute('data-mob-statut'), champ: btn.getAttribute('data-champ'), valeur: btn.getAttribute('data-valeur') });
        });
      });

      var refresh = this.querySelector('[data-refresh]');
      if (refresh) refresh.addEventListener('click', function () { self._emit('rc-refresh', { view: self._view }); });

      var toastX = this.querySelector('[data-toast-x]');
      if (toastX) toastX.addEventListener('click', function () { self._fermerToast(); });

       
       
      this.querySelectorAll('[data-periode]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          if (btn.disabled) return;
          var v = Number(btn.getAttribute('data-periode'));
          if (v === self._periode) return;
          self._periode = v;
          self._render();
        });
      });

      this.querySelectorAll('.rdrc-tab[data-view]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var v = btn.getAttribute('data-view');
          if (!v || v === self._view || btn.disabled) return;
          self._view = v;
          self._render();                     
          self._emit('rc-view', { view: v });  
        });
      });

      var exportBtn = this.querySelector('[data-export]');
      if (exportBtn) exportBtn.addEventListener('click', function () { self._exportCsv(); });

       
       
       
      this.querySelectorAll('[data-rattraper]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          if (btn.disabled) return;
          btn.disabled = true;
          btn.textContent = 'Récupération en cours…';
          self._emit('rc-rattraper', {});
        });
      });

       
       
      this.querySelectorAll('[data-view-link]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var v = btn.getAttribute('data-view-link');
          if (!v || v === self._view) return;
          self._view = v;
          self._render();
          self._emit('rc-view', { view: v });
        });
      });

       
       
       
      this.querySelectorAll('[data-copy]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var txt = btn.getAttribute('data-copy') || '';
          var fait = function () {
            btn.classList.add('is-done');
            var lbl = btn.querySelector('span');
            if (lbl) lbl.textContent = 'Copié';
            setTimeout(function () {
              btn.classList.remove('is-done');
              if (lbl) lbl.textContent = 'Copier';
            }, 1600);
          };
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(txt).then(fait, function () { self._copieDeSecours(txt, fait); });
          } else {
            self._copieDeSecours(txt, fait);
          }
        });
      });

       
      this.querySelectorAll('[data-insta-view]').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var v = btn.getAttribute('data-insta-view');
          if (!v || v === self._instaView) return;
          self._instaView = v;
          self._render();
          self._emit('rc-insta-view', { view: v });    
        });
      });

      this.querySelectorAll('.rdrc-row').forEach(function (row) {
        var lock = function () {
          row.querySelectorAll('button').forEach(function (b) { b.disabled = true; });
        };
        row.querySelectorAll('[data-approve]').forEach(function (btn) {
          btn.addEventListener('click', function () {
            var memberId = row.getAttribute('data-member');
            if (!memberId || self._busy[memberId]) return;
            self._busy[memberId] = true;
            lock();
            self._emit('rc-resolve', { memberId: memberId, approve: btn.getAttribute('data-approve') === '1' });
          });
        });
        var revoke = row.querySelector('[data-revoke]');
        if (revoke) {
          revoke.addEventListener('click', function () {
            var memberId = row.getAttribute('data-member');
            if (!memberId || self._busy[memberId]) return;
            self._busy[memberId] = true;
            lock();
            self._emit('rc-revoke', { memberId: memberId });
          });
        }
      });
    }
  }

  if (!customElements.get('rdr-console')) customElements.define('rdr-console', RdrConsole);
})();
})();
