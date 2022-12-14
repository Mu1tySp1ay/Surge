/*
README:https://github.com/DualSubs/DualSubs/
*/

const $ = new Env("DualSubs v0.4.2-youtube-player");
const URL = new URLs();

const DataBase = {
	"Verify": {
		"Settings":{"GoogleCloud":{"Method":"Part","Mode":"Key","Auth":null},"Azure":{"Method":"Part","Version":"Azure","Region":null,"Mode":"Key","Auth":null},"DeepL":{"Method":"Part","Version":"Free","Auth":null}}
	},
	"Advanced": {
		"Settings":{"Translator":{"Times":3,"Interval":100,"Exponential":true}}
	},
	"Default": {
		"Settings":{"Switch":true,"Types":["Official","Google","GoogleCloud","Azure","DeepL"],"Type":"Google","Languages":["ZH","EN"],"Language":"ZH","External":{"URL":null,"Offset":0,"ShowOnly":false},"Position":"Forward","CacheSize":6,"Tolerance":1000},
		"Configs": {
			"Languages":{"AUTO":"","AR":["ar","ar-001"],"BG":["bg","bg-BG","bul"],"CS":["cs","cs-CZ","ces"],"DA":["da","da-DK","dan"],"DE":["de","de-DE","deu"],"EL":["el","el-GR","ell"],"EN":["en","en-US","eng","en-GB","en-UK","en-CA"],"EN-CA":["en-CA","en","eng"],"EN-GB":["en-UK","en","eng"],"EN-US":["en-US","en","eng"],"EN-US SDH":["en-US SDH","en-US","en","eng"],"ES":["es","es-419","es-ES","spa","es-419 SDH"],"ES-419":["es-419","es","spa"],"ES-419 SDH":["es-419 SDH","es-419","es","spa"],"ES-ES":["es-ES","es","spa"],"ET":["et","et-EE","est"],"FI":["fi","fi-FI","fin"],"FR":["fr","fr-CA","fr-FR","fra"],"FR-CA":["fr-CA","fr","fra"],"FR-DR":["fr-FR","fr","fra"],"HU":["hu","hu-HU","hun"],"ID":["id","id-id"],"IT":["it","it-IT","ita"],"JA":["ja","ja-JP","jpn"],"KO":["ko","ko-KR","kor"],"LT":["lt","lt-LT","lit"],"LV":["lv","lv-LV","lav"],"NL":["nl","nl-NL","nld"],"NO":["no","nb-NO","nor"],"PL":["pl","pl-PL"],"PT":["pt","pt-PT","pt-BR","por"],"PT-PT":["pt-PT","pt","por"],"PT-BR":["pt-BR","pt","por"],"RO":["ro","ro-RO","ron"],"RU":["ru","ru-RU","rus"],"SK":["sk","sk-SK","slk"],"SL":["sl","sl-SI","slv"],"SV":["sv","sv-SE","swe"],"IS":["is","is-IS","isl"],"ZH":["zh","cmn","zho"],"ZH-CN":["zh-CN","zh-Hans","cmn-Hans","zho"],"ZH-HANS":["zh-Hans","cmn-Hans","zh-CN","zho"],"ZH-HK":["zh-HK","yue-Hant","yue","zho"],"ZH-TW":["zh-TW","zh-Hant","cmn-Hant","zho"],"ZH-HANT":["zh-Hant","cmn-Hant","zh-TW","zho"],"YUE":["yue","yue-Hant","zho"],"YUE-HK":["yue-Hant","yue","zho"]}		}
	},
	"YouTube": {
		"Configs": {
			"Languages":{"BG":"bg-BG","CS":"cs","DA":"da-DK","DE":"de","EL":"el","EN":"en","EN-GB":"en-GB","EN-US":"en-US","EN-US SDH":"en-US SDH","ES":"es","ES-419":"es-419","ES-ES":"es-ES","ET":"et-EE","FI":"fi","FR":"fr","HU":"hu-HU","ID":"id","IT":"it","JA":"ja","KO":"ko","LT":"lt-LT","LV":"lv-LV","NL":"nl-NL","NO":"nb-NO","PL":"pl-PL","PT":"pt","PT-PT":"pt-PT","PT-BR":"pt-BR","RO":"ro-RO","RU":"ru-RU","SK":"sk-SK","SL":"sl-SI","SV":"sv-SE","IS":"is-IS","ZH":"zh","ZH-HANS":"zh-Hans","ZH-HK":"zh-Hant-HK","ZH-HANT":"zh-Hant","ZH-TW":"zh-TW","YUE":"yue","YUE-HK":"yue-HK"}
		}
	},
	"Netflix": {
		"Configs": {
			"Languages":{"AR":"ar","CS":"cs","DA":"da","DE":"de","EN":"en","EN-GB":"en-GB","EN-US":"en-US","EN-US SDH":"en-US SDH","ES":"es","ES-419":"es-419","ES-ES":"es-ES","FI":"fi","FR":"fr","HE":"he","HR":"hr","HU":"hu","ID":"id","IT":"it","JA":"ja","KO":"ko","MS":"ms","NB":"nb","NL":"nl","PL":"pl","PT":"pt","PT-PT":"pt-PT","PT-BR":"pt-BR","RO":"ro","RU":"ru","SV":"sv","TH":"th","TR":"tr","UK":"uk","VI":"vi","IS":"is","ZH":"zh","ZH-HANS":"zh-Hans","ZH-HK":"zh-HK","ZH-HANT":"zh-Hant"}
		}
	},
	"Google": {
		"Configs": {
			"Languages":{"AUTO":"","AR":"ar","BG":"bg","CS":"cs","DA":"da","DE":"de","EL":"el","EN":"en","EN-GB":"en","EN-US":"en","EN-US SDH":"en","ES":"es","ES-419":"es","ES-ES":"es","ET":"et","FI":"fi","FR":"fr","HU":"hu","IT":"it","JA":"ja","KO":"ko","LT":"lt","LV":"lv","NL":"nl","NO":"no","PL":"pl","PT":"pt","PT-PT":"pt","PT-BR":"pt","RO":"ro","RU":"ru","SK":"sk","SL":"sl","SV":"sv","IS":"is","ZH":"zh","ZH-HANS":"zh-CN","ZH-HK":"zh-TW","ZH-HANT":"zh-TW"}
		}
	},
	"Microsoft": {
		"Configs": {
			"Languages":{"AUTO":"","AR":"ar","BG":"bg","CS":"cs","DA":"da","DE":"de","EL":"el","EN":"en","EN-GB":"en","EN-US":"en","EN-US SDH":"en","ES":"es","ES-419":"es","ES-ES":"es","ET":"et","FI":"fi","FR":"fr","HU":"hu","IT":"it","JA":"ja","KO":"ko","LT":"lt","LV":"lv","NL":"nl","NO":"no","PL":"pl","PT":"pt","PT-PT":"pt","PT-BR":"pt","RO":"ro","RU":"ru","SK":"sk","SL":"sl","SV":"sv","IS":"is","ZH":"zh-Hans","ZH-HANS":"zh-Hans","ZH-HK":"yue","ZH-HANT":"zh-Hant"}
		}
	},
	"DeepL": {
		"Configs": {
			"Languages":{"AUTO":"","BG":"BG","CS":"CS","DA":"DA","DE":"de","EL":"el","EN":"EN-US","EN-GB":"EN-GB","EN-US":"EN-US","EN-US SDH":"EN-US","ES":"ES","ES-419":"ES","ES-ES":"ES","ET":"ET","FI":"FI","FR":"FR","HU":"HU","IT":"IT","JA":"JA","KO":"ko","LT":"LT","LV":"LV","NL":"NL","PL":"PL","PT":"PT-PT","PT-PT":"PT-PT","PT-BR":"PT-BR","RO":"RO","RU":"RU","SK":"SK","SL":"SL","SV":"SV","ZH":"ZH","ZH-HANS":"ZH","ZH-HK":"ZH","ZH-HANT":"ZH"}
		}
	}
};

if ($request.method == "OPTIONS") $.done();
delete $request.headers["Host"]
delete $request.headers["Connection"]
delete $request.headers["Range"]

/***************** Processing *****************/
!(async () => {
	const { Platform, Settings, Caches, Configs } = await setENV("DualSubs", $request.url, DataBase);
	if (Settings.Switch) {
		let url = URL.parse($request.url);
		$.log(`??? ${$.name}, url.path=${url.path}`);
		// ????????????
		//const Format = $request.headers["Content-Type"].match(/([^\/;]+)/g)[2];
		const Format = $request.headers["Content-Type"].split("; ")[0].split("/")[1]
		$.log(`???? ${$.name}`, `Format: ${Format}`, "");
		switch (Format) {
			case "json":
				let data = JSON.parse($response.body);
				// ?????????
				let Captions = data?.captions
				if (Captions) { // ???????????????
					$.log(`??? ${$.name}, Captions`, "");
					// ?????????????????????
					DataBase.translationLanguages = [{ "languageCode": "sq", "languageName": { "simpleText": "??????????????????" } }, { "languageCode": "ar", "languageName": { "simpleText": "????????????" } }, { "languageCode": "am", "languageName": { "simpleText": "???????????????" } }, { "languageCode": "az", "languageName": { "simpleText": "???????????????" } }, { "languageCode": "ga", "languageName": { "simpleText": "????????????" } }, { "languageCode": "et", "languageName": { "simpleText": "???????????????" } }, { "languageCode": "or", "languageName": { "simpleText": "????????????" } }, { "languageCode": "eu", "languageName": { "simpleText": "????????????" } }, { "languageCode": "be", "languageName": { "simpleText": "???????????????" } }, { "languageCode": "bg", "languageName": { "simpleText": "???????????????" } }, { "languageCode": "is", "languageName": { "simpleText": "?????????" } }, { "languageCode": "pl", "languageName": { "simpleText": "?????????" } }, { "languageCode": "bs", "languageName": { "simpleText": "???????????????" } }, { "languageCode": "fa", "languageName": { "simpleText": "?????????" } }, { "languageCode": "tt", "languageName": { "simpleText": "?????????" } }, { "languageCode": "da", "languageName": { "simpleText": "?????????" } }, { "languageCode": "de", "languageName": { "simpleText": "??????" } }, { "languageCode": "ru", "languageName": { "simpleText": "??????" } }, { "languageCode": "fr", "languageName": { "simpleText": "??????" } }, { "languageCode": "fil", "languageName": { "simpleText": "????????????" } }, { "languageCode": "fi", "languageName": { "simpleText": "?????????" } }, { "languageCode": "km", "languageName": { "simpleText": "?????????" } }, { "languageCode": "ka", "languageName": { "simpleText": "???????????????" } }, { "languageCode": "gu", "languageName": { "simpleText": "???????????????" } }, { "languageCode": "kk", "languageName": { "simpleText": "????????????" } }, { "languageCode": "ht", "languageName": { "simpleText": "?????????????????????" } }, { "languageCode": "ko", "languageName": { "simpleText": "??????" } }, { "languageCode": "ha", "languageName": { "simpleText": "?????????" } }, { "languageCode": "nl", "languageName": { "simpleText": "?????????" } }, { "languageCode": "gl", "languageName": { "simpleText": "???????????????" } }, { "languageCode": "ca", "languageName": { "simpleText": "??????????????????" } }, { "languageCode": "cs", "languageName": { "simpleText": "?????????" } }, { "languageCode": "kn", "languageName": { "simpleText": "????????????" } }, { "languageCode": "ky", "languageName": { "simpleText": "???????????????" } }, { "languageCode": "xh", "languageName": { "simpleText": "?????????" } }, { "languageCode": "co", "languageName": { "simpleText": "????????????" } }, { "languageCode": "hr", "languageName": { "simpleText": "???????????????" } }, { "languageCode": "ku", "languageName": { "simpleText": "????????????" } }, { "languageCode": "la", "languageName": { "simpleText": "?????????" } }, { "languageCode": "lv", "languageName": { "simpleText": "???????????????" } }, { "languageCode": "lo", "languageName": { "simpleText": "?????????" } }, { "languageCode": "lt", "languageName": { "simpleText": "????????????" } }, { "languageCode": "lb", "languageName": { "simpleText": "????????????" } }, { "languageCode": "rw", "languageName": { "simpleText": "????????????" } }, { "languageCode": "ro", "languageName": { "simpleText": "???????????????" } }, { "languageCode": "mt", "languageName": { "simpleText": "????????????" } }, { "languageCode": "mr", "languageName": { "simpleText": "????????????" } }, { "languageCode": "mg", "languageName": { "simpleText": "???????????????" } }, { "languageCode": "ml", "languageName": { "simpleText": "??????????????????" } }, { "languageCode": "ms", "languageName": { "simpleText": "?????????" } }, { "languageCode": "mk", "languageName": { "simpleText": "????????????" } }, { "languageCode": "mi", "languageName": { "simpleText": "?????????" } }, { "languageCode": "mn", "languageName": { "simpleText": "?????????" } }, { "languageCode": "bn", "languageName": { "simpleText": "????????????" } }, { "languageCode": "my", "languageName": { "simpleText": "?????????" } }, { "languageCode": "hmn", "languageName": { "simpleText": "??????" } }, { "languageCode": "af", "languageName": { "simpleText": "???????????????" } }, { "languageCode": "st", "languageName": { "simpleText": "????????????" } }, { "languageCode": "ne", "languageName": { "simpleText": "????????????" } }, { "languageCode": "no", "languageName": { "simpleText": "?????????" } }, { "languageCode": "pa", "languageName": { "simpleText": "????????????" } }, { "languageCode": "pt", "languageName": { "simpleText": "????????????" } }, { "languageCode": "ps", "languageName": { "simpleText": "????????????" } }, { "languageCode": "ny", "languageName": { "simpleText": "????????????" } }, { "languageCode": "ja", "languageName": { "simpleText": "??????" } }, { "languageCode": "sv", "languageName": { "simpleText": "?????????" } }, { "languageCode": "sm", "languageName": { "simpleText": "????????????" } }, { "languageCode": "sr", "languageName": { "simpleText": "???????????????" } }, { "languageCode": "si", "languageName": { "simpleText": "????????????" } }, { "languageCode": "sn", "languageName": { "simpleText": "?????????" } }, { "languageCode": "eo", "languageName": { "simpleText": "?????????" } }, { "languageCode": "sk", "languageName": { "simpleText": "???????????????" } }, { "languageCode": "sl", "languageName": { "simpleText": "??????????????????" } }, { "languageCode": "sw", "languageName": { "simpleText": "???????????????" } }, { "languageCode": "gd", "languageName": { "simpleText": "??????????????????" } }, { "languageCode": "ceb", "languageName": { "simpleText": "?????????" } }, { "languageCode": "so", "languageName": { "simpleText": "????????????" } }, { "languageCode": "tg", "languageName": { "simpleText": "????????????" } }, { "languageCode": "te", "languageName": { "simpleText": "????????????" } }, { "languageCode": "ta", "languageName": { "simpleText": "????????????" } }, { "languageCode": "th", "languageName": { "simpleText": "??????" } }, { "languageCode": "tr", "languageName": { "simpleText": "????????????" } }, { "languageCode": "tk", "languageName": { "simpleText": "????????????" } }, { "languageCode": "cy", "languageName": { "simpleText": "????????????" } }, { "languageCode": "ug", "languageName": { "simpleText": "????????????" } }, { "languageCode": "ur", "languageName": { "simpleText": "????????????" } }, { "languageCode": "uk", "languageName": { "simpleText": "????????????" } }, { "languageCode": "uz", "languageName": { "simpleText": "???????????????" } }, { "languageCode": "es", "languageName": { "simpleText": "????????????" } }, { "languageCode": "fy", "languageName": { "simpleText": "??????????????????" } }, { "languageCode": "iw", "languageName": { "simpleText": "????????????" } }, { "languageCode": "el", "languageName": { "simpleText": "?????????" } }, { "languageCode": "haw", "languageName": { "simpleText": "????????????" } }, { "languageCode": "sd", "languageName": { "simpleText": "?????????" } }, { "languageCode": "hu", "languageName": { "simpleText": "????????????" } }, { "languageCode": "su", "languageName": { "simpleText": "?????????" } }, { "languageCode": "hy", "languageName": { "simpleText": "???????????????" } }, { "languageCode": "ig", "languageName": { "simpleText": "?????????" } }, { "languageCode": "it", "languageName": { "simpleText": "????????????" } }, { "languageCode": "yi", "languageName": { "simpleText": "????????????" } }, { "languageCode": "hi", "languageName": { "simpleText": "?????????" } }, { "languageCode": "id", "languageName": { "simpleText": "??????????????????" } }, { "languageCode": "en", "languageName": { "simpleText": "??????" } }, { "languageCode": "yo", "languageName": { "simpleText": "????????????" } }, { "languageCode": "vi", "languageName": { "simpleText": "?????????" } }, { "languageCode": "jv", "languageName": { "simpleText": "?????????" } }, { "languageCode": "zh-Hant", "languageName": { "simpleText": "??????????????????" } }, { "languageCode": "zh-Hans", "languageName": { "simpleText": "??????????????????" } }, { "languageCode": "zu", "languageName": { "simpleText": "?????????" } }];
					if (Captions.playerCaptionsRenderer) {
						Captions.playerCaptionsRenderer.visibility = "ON" // ????????????????????????
						Captions.playerCaptionsRenderer.showAutoCaptions = true; // ???????????????????????????
					}
					let Tracklist = Captions?.playerCaptionsTracklistRenderer
					if (Tracklist) { // ???????????????
						$.log(`??? ${$.name}, Tracklist`, "");
						if (Tracklist?.captionTracks) {
							// ??????????????????
							Tracklist.captionTracks = Tracklist.captionTracks.map(caption => {
								caption.isTranslatable = true
								return caption
							});
						};
						// ???????????????
						if (Tracklist?.translationLanguages) {
							Tracklist.translationLanguages = Object.assign(Tracklist.translationLanguages, DataBase.translationLanguages);
						} else Tracklist.translationLanguages = DataBase.translationLanguages;
					};
				};
				$response.body = JSON.stringify(data);
				break;
			case "xml":
			case "x-protobuf":
			default:
				break;
		};
	};
})()
	.catch((e) => $.logErr(e))
	.finally(() => {
		if ($.isQuanX()) $.done({ headers: $response.headers, body: $response.body })
		else $.done($response)
	})

/***************** Async Function *****************/
/**
 * Get Environment Variables
 * @link https://github.com/VirgilClyne/VirgilClyne/blob/main/function/getENV/getENV.min.js
 * @author VirgilClyne
 * @param {String} t - Persistent Store Key
 * @param {String} e - Platform Name
 * @param {Object} n - Default Database
 * @return {Promise<*>}
 */
async function getENV(t,e,n){let i=$.getjson(t,n),s={};if("undefined"!=typeof $argument&&Boolean($argument)){let t=Object.fromEntries($argument.split("&").map((t=>t.split("="))));for(let e in t)f(s,e,t[e])}let g={...n?.Default?.Settings,...n?.[e]?.Settings,...i?.[e]?.Settings,...s},o={...n?.Default?.Configs,...n?.[e]?.Configs,...i?.[e]?.Configs},a=i?.[e]?.Caches||void 0;return"string"==typeof a&&(a=JSON.parse(a)),{Settings:g,Caches:a,Configs:o};function f(t,e,n){e.split(".").reduce(((t,i,s)=>t[i]=e.split(".").length===++s?n:t[i]||{}),t)}}

/**
 * Set Environment Variables
 * @author VirgilClyne
 * @param {String} name - Persistent Store Key
 * @param {String} url - Request URL
 * @param {Object} database - Default DataBase
 * @return {Promise<*>}
 */
async function setENV(name, url, database) {
	$.log(`??? ${$.name}, Set Environment Variables`, "");
	/***************** Verify *****************/
	const { Settings: Verify } = await getENV(name, "Verify", database);
	/***************** Advanced *****************/
	let { Settings: Advanced } = await getENV(name, "Advanced", database);
	Advanced.Translator.Times = parseInt(Advanced.Translator?.Times, 10) // BoxJs??????????????????
	Advanced.Translator.Interval = parseInt(Advanced.Translator?.Interval, 10) // BoxJs??????????????????
	Advanced.Translator.Exponential = JSON.parse(Advanced.Translator?.Exponential) //  BoxJs????????????Boolean
	/***************** Platform *****************/
	const Platform = /\.apple\.com/i.test(url) ? "Apple"
		: /\.(dssott|starott)\.com/i.test(url) ? "Disney_Plus"
			: /\.(hls\.row\.aiv-cdn|akamaihd|cloudfront)\.net/i.test(url) ? "Prime_Video"
				: /\.(api\.hbo|hbomaxcdn)\.com/i.test(url) ? "HBO_Max"
					: /\.(hulustream|huluim)\.com/i.test(url) ? "Hulu"
						: /\.(cbsaavideo|cbsivideo|cbs)\.com/i.test(url) ? "Paramount_Plus"
							: /dplus-ph-/i.test(url) ? "Discovery_Plus_Ph"
								: /\.peacocktv\.com/i.test(url) ? "Peacock_TV"
									: /\.uplynk\.com/i.test(url) ? "Discovery_Plus"
										: /\.fubo\.tv/i.test(url) ? "Fubo_TV"
											: /\.youtube\.com/i.test(url) ? "YouTube"
												: /\.(netflix\.com|nflxvideo\.net)/i.test(url) ? "Netflix"
													: "Universal"
	$.log(`???? ${$.name}, Set Environment Variables`, `Platform: ${Platform}`, "");
	/***************** Settings *****************/
	let { Settings, Caches = [], Configs } = await getENV(name, Platform, database);
	if (Platform == "Apple") {
		let platform = /\.itunes\.apple\.com\/WebObjects\/(MZPlay|MZPlayLocal)\.woa\/hls\/subscription\//i.test(url) ? "Apple_TV_Plus"
			: /\.itunes\.apple\.com\/WebObjects\/(MZPlay|MZPlayLocal)\.woa\/hls\/workout\//i.test(url) ? "Apple_Fitness"
				: /\.itunes\.apple\.com\/WebObjects\/(MZPlay|MZPlayLocal)\.woa\/hls\//i.test(url) ? "Apple_TV"
					: /vod-.*-aoc\.tv\.apple\.com/i.test(url) ? "Apple_TV_Plus"
						: /vod-.*-amt\.tv\.apple\.com/i.test(url) ? "Apple_TV"
							: /(hls|hls-svod)\.itunes\.apple\.com/i.test(url) ? "Apple_Fitness"
								: "Apple"
		$.log(`???? ${$.name}, Set Environment Variables`, `platform: ${platform}`, "");
		Settings = await getENV(name, platform, database).then(v=> v.Settings);
	};
	Settings.Switch = JSON.parse(Settings.Switch) //  BoxJs????????????Boolean
	if (typeof Settings.Types === "string") Settings.Types = Settings.Types.split(",") // BoxJs??????????????????
	if (Array.isArray(Settings.Types)) {
		if (!Verify.GoogleCloud.Auth) Settings.Types = Settings.Types.filter(e => e !== "GoogleCloud"); // ?????????????????????
		if (!Verify.Azure.Auth) Settings.Types = Settings.Types.filter(e => e !== "Azure");
		if (!Verify.DeepL.Auth) Settings.Types = Settings.Types.filter(e => e !== "DeepL");
	}
	Settings.External.Offset = parseInt(Settings.External?.Offset, 10) // BoxJs??????????????????
	Settings.External.ShowOnly = JSON.parse(Settings.External?.ShowOnly) //  BoxJs????????????Boolean
	Settings.CacheSize = parseInt(Settings.CacheSize, 10) // BoxJs??????????????????
	Settings.Tolerance = parseInt(Settings.Tolerance, 10) // BoxJs??????????????????
	$.log(`???? ${$.name}, Set Environment Variables`, `Settings: ${typeof Settings}`, `Settings??????: ${JSON.stringify(Settings)}`, "");
	return { Platform, Verify, Advanced, Settings, Caches, Configs };
};

/***************** Env *****************/
// prettier-ignore
// https://github.com/chavyleung/scripts/blob/master/Env.min.js
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.encoding="utf-8",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}isShadowrocket(){return"undefined"!=typeof $rocket}isStash(){return"undefined"!=typeof $environment&&$environment["stash-version"]}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){if(t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){let s=require("iconv-lite");this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:i,statusCode:r,headers:o,rawBody:h}=t;e(null,{status:i,statusCode:r,headers:o,rawBody:h},s.decode(h,this.encoding))},t=>{const{message:i,response:r}=t;e(i,r,r&&s.decode(r.rawBody,this.encoding))})}}post(t,e=(()=>{})){const s=t.method?t.method.toLocaleLowerCase():"post";if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient[s](t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method=s,this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){let i=require("iconv-lite");this.initGotEnv(t);const{url:r,...o}=t;this.got[s](r,o).then(t=>{const{statusCode:s,statusCode:r,headers:o,rawBody:h}=t;e(null,{status:s,statusCode:r,headers:o,rawBody:h},i.decode(h,this.encoding))},t=>{const{message:s,response:r}=t;e(s,r,r&&i.decode(r.rawBody,this.encoding))})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl,i=t["update-pasteboard"]||t.updatePasteboard;return{"open-url":e,"media-url":s,"update-pasteboard":i}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}

// https://github.com/VirgilClyne/VirgilClyne/blob/main/function/URL/URLs.embedded.min.js
function URLs(s){return new class{constructor(s=[]){this.name="URL v1.0.0",this.opts=s,this.json={url:{scheme:"",host:"",path:""},params:{}}}parse(s){let t=s.match(/(?<scheme>.+):\/\/(?<host>[^/]+)\/?(?<path>[^?]+)?\??(?<params>.*)?/)?.groups??null;return t?.params&&(t.params=Object.fromEntries(t.params.split("&").map((s=>s.split("="))))),t}stringify(s=this.json){return s?.params?s.scheme+"://"+s.host+"/"+s.path+"?"+Object.entries(s.params).map((s=>s.join("="))).join("&"):s.scheme+"://"+s.host+"/"+s.path}}(s)}