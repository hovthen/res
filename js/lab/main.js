//初始化
var scroll = new SmoothScroll('a[href*="#"]', { speed: 500, speedAsDuration: true });
var msgcode = localStorage.getItem('msgCode');
//localStorage.removeItem('msgCode');
var msgOn = 1;
var $ = mdui.$;
Vue.config.productionTip = false;

//主题
theme();

function changetheme() {
	dark = localStorage.getItem('themeDark') === 'true' ? true : false;
	localStorage.setItem('themeDark', !dark);
	theme();
};

$('.load').addClass("mdui-hidden");

function showmsg() {
	var content = '工具站全新上线，赶快访问体验吧！<br/><br/><a class="mdui-btn mdui-color-amber mdui-ripple" href="http://www.baidu.com" target="_blank">立即访问</a><br/><br/><br/><hr/>本次更新：<br/>重写代码，分类更清哳，浏览效果更佳。';
	var msgalert = mdui.alert(content, '<i class="mdui-icon material-icons">message</i> 提示', function () {
		localStorage.setItem('msgCode', msgOn);
		msgbar.close();
		msgalert.close();
	},{
		confirmText: '联已阅',
		stackedButtons: false,
		history: true,
		overlay: true,
		modal: false,
		closeOnEsc: true,
		destroyOnClosed: true,
	});
};

function theme() {
	$('body').removeClass("mdui-theme-layout-auto");
	dark = localStorage.getItem('themeDark') === 'true' ? true : false;
	if (dark) {
		$('body').removeClass("mdui-theme-layout-light");
		$('body').removeClass("mdui-theme-primary-blue-grey-a800");
		$('body').removeClass("mdui-theme-accent-pink-a700");
		$('body').addClass("mdui-theme-layout-dark");
		$('body').addClass("mdui-theme-primary-light-green-a200");
		$('body').addClass("mdui-theme-accent-amber-a200");
		$('#theme').text("brightness_7");
	} else {
		$('body').removeClass("mdui-theme-layout-dark");
		$('body').removeClass("mdui-theme-primary-light-green-a200");
		$('body').removeClass("mdui-theme-accent-amber-a200");
		$('body').addClass("mdui-theme-layout-light");
		$('body').addClass("mdui-theme-primary-blue-grey-a800");
		$('body').addClass("mdui-theme-accent-pink-a700");
		$('#theme').text("brightness_4");
	}
};

if( msgcode < msgOn ){
	var msgbar = mdui.snackbar({
		message: '<i class="mdui-icon material-icons">message</i>：您有一条待查看消息',
		buttonText: '暂时忽略',
		timeout: 0,
		closeOnOutsideClick: false,
		onClick: function(){
			showmsg();
		},
		onButtonClick: function(){
			mdui.alert('您可以通过点击右上角 <i class="mdui-icon material-icons">message</i> 图标查看！');
		},
		onClose: function(){
			
		}
	});
}

$('.alert-msg').on('click', function () {
	showmsg();
});

function msgs(code) {
	var msg = {
		'loading': [
			'页面加载中，请稍候 ...',
			'若长时间加栽，请检查网络或稍后再尝试访问，如有问题请联系站长。<br/><br/>Email：hovthen@gmail.com'
		],
		'contact': [
			'Contact',
			'hovthen@gmail.com'
		],
		'cookies': [
			'Cookies',
			'本站尊重您的隐私，本页面未使用 Cookies，本站其他域名站点请查看对应说明！'
		],
		'privacy': [
			'Privacy',
			'这里还没有内容啦~'
		],
		'terms': [
			'Terms',
			'这里还没有内容啦~'
		]
	};
	mdui.alert(msg[code][1], msg[code][0], function () {
	},{
		confirmText: '联已阅',
		stackedButtons: false,
		history: true,
		overlay: true,
		modal: true,
		closeOnEsc: true,
		destroyOnClosed: true,
	});
};

new Vue({
		el: '#main',
		data: {
			date: {
				year: new Date().getFullYear(),
				month: new Date().getMonth(),
				day: new Date().getDate(),
				days: 0,
			},
			copyright: {
				year: 2019,
				author: '万里无云',
				link: 'javascript:void(0)'
			},
			friends: [
				{
					mid: 'boke',
					title: '博客',
					href: 'https://www.hovthen.com/',
					icon: 'chrome_reader_mode',
					color: 'mdui-text-color-lime',
				},
				{
					mid: 'QGroup',
					title: 'QQ群',
					href: 'https://hovthen.com/qgroup',
					icon: 'chat',
					color: 'mdui-text-color-indigo-accent',
				}
			],
			groups: [
				{
					mid: 'hot',
					title: '推荐',
					icon: 'whatshot',
					color: 'mdui-text-color-deep-orange',
					tools: [
						{
							mid: 'boke',
							title: '博客',
							desc: '淘知路远，万里相伴。',
							hide: [],
							url: 'https://www.hovthen.com/',
							target: '_self',
							cover: 'https://cdn.jsdelivr.net/gh/Hovthen/Piclibs@main/image/lab/website_boke.png',
							chip: null
						},
						{
							mid: 'toolbox',
							title: '工具箱',
							desc: '实用的工具箱',
							hide: [],
							url: 'https://tool.hovthen.com/',
							target: '_self',
							cover: 'https://cdn.jsdelivr.net/gh/Hovthen/Piclibs@main/image/lab/website_tool.png',
							chip: null
						},
						{
							mid: 'down',
							title: '小盘址',
							desc: '多网盘合一高速下载',
							hide: [],
							url: 'https://down.hovthen.com',
							target: '_blank',
							cover: 'https://cdn.jsdelivr.net/gh/Hovthen/Piclibs@main/image/lab/cloud_onedrive.png',
							chip: null
						}
					]
				},
				{
					mid: 'enjoy',
					title: '娱乐',
					icon: 'audiotrack',
					color: 'mdui-text-color-green',
					tools: [
						{
							mid: 'YesPlay',
							title: '在线音乐',
							desc: 'YesPlay Online with Netease Cloud API',
							hide: [],
							url: 'https://tool.hovthen.com/YesPlayMusic',
							target: '_self',
							cover: 'https://cdn.jsdelivr.net/gh/Hovthen/Piclibs@main/image/lab/music_online.png',
							chip: null
						},
						{
							mid: 'video-vurl',
							title: '云解析',
							desc: '全网付费视频通用在线云解析',
							hide: [],
							url: './pages/video-vurl/',
							target: '_blank',
							cover: 'https://cdn.jsdelivr.net/gh/Hovthen/Piclibs@main/image/lab/video_vurl.png',
							chip: null
						},
						{
							mid: 'video-spider',
							url: './pages/video-spider/',
							title: '视频蜘蛛',
							hide: [],
							desc: 'Video Spider 全网短视频去水印',
							target: '_blank',
							cover: 'https://cdn.jsdelivr.net/gh/Hovthen/Piclibs@main/image/lab/video_short.png',
							chip: null
						},
						{
							mid: 'unlock-music',
							title: '音乐解锁',
							desc: 'Unlock Music File and enjoy it easier',
							hide: [],
							url: 'https://tool.hovthen.com/unlock-music',
							target: '_self',
							cover: 'https://cdn.jsdelivr.net/gh/Hovthen/Piclibs@main/image/lab/music_unlock.png',
							chip: null
						},
						{
							mid: 'bing_view',
							title: '必应美图',
							desc: '必应 Bing 每日一图',
							hide: [],
							url: './pages/bing/',
							target: '_self',
							cover: 'https://cdn.jsdelivr.net/gh/Hovthen/Piclibs@main/image/lab/bing_view.png',
							chip: null
						},
						{
							mid: 'liumingye_music',
							title: 'MY Free MP3',
							desc: 'MY Free MP3 Online Music',
							hide: [],
							url: 'https://tool.hovthen.com/MyFreeMP3',
							target: '_blank',
							cover: 'https://cdn.jsdelivr.net/gh/Hovthen/Piclibs@main/image/lab/music_online2.png',
							chip: '友情链接'
						}
					]
				},
				{
					mid: 'game',
					title: '游戏',
					href: '?type=page&id=',
					icon: 'videogame_asset',
					color: 'mdui-text-color-amber',
					tools: []
				},
				{
					mid: 'tool',
					title: '工具',
					href: '?type=page&id=',
					icon: 'business_center',
					color: 'mdui-text-color-blue-grey',
					tools: [
						{
							mid: 'checkin-163',
							title: '云音乐打卡',
							desc: 'Netease Music 打卡 & 300首',
							hide: [],
							url: './pages/checkin-163/',
							target: '_blank',
							cover: 'https://cdn.jsdelivr.net/gh/Hovthen/Piclibs@main/image/lab/music_netease.png',
							chip: null
						}
					]
				},
				{
					mid: 'cloud',
					title: '网盘',
					href: '?type=page&id=',
					icon: 'cloud',
					color: 'mdui-text-color-cyan',
					tools: [
						{
							mid: 'utermux',
							title: 'utermux',
							desc: 'UTermux 高级终端资源下载官方站',
							hide: ['title'],
							url: 'https://d.icdown.club/',
							target: '_blank',
							cover: 'https://cdn.jsdelivr.net/gh/Hovthen/Piclibs@main/image/lab/cloud_utermux.png',
							chip: '友情链接'
						},
						{
							mid: 'juapp8',
							title: '聚应用',
							desc: '蓝奏云文件搜索下载',
							hide: ['title','desc'],
							url: 'https://wwi.lanzoux.com/b05gwbx7a',
							target: '_blank',
							cover: 'https://cdn.jsdelivr.net/gh/Hovthen/Piclibs@main/image/lab/app_juapp8.png',
							chip: '友情链接'
						},
						{
							mid: '52pojieDown',
							title: '吾爱破解网盘',
							desc: '逆向分析安全工具下载',
							hide: ['title','desc'],
							url: 'https://down.52pojie.cn/',
							target: '_blank',
							cover: 'https://cdn.jsdelivr.net/gh/Hovthen/Piclibs@main/image/lab/website_52pojie.png',
							chip: '友情链接'
						},
						{
							mid: 'lanzou',
							title: '蓝奏云',
							desc: '蓝奏云分享文件',
							hide: [],
							url: 'javascript:void(0)',
							target: '_blank',
							cover: 'https://cdn.jsdelivr.net/gh/Hovthen/Piclibs@main/image/lab/cloud_lanzou.png',
							chip: null
						}
					]
				}
			],
			message: 123,
		},
		computed: {
			'copyrightYear': function () {
				return this.date.year > this.copyright.year ? this.copyright.year.toString() + ' - ' + this.date.year.toString() : this.copyright.year.toString();
			}
		},
		methods: {
			howDays(year,month,day) {
				this.date.days = 0;
				for (var i = 0; i < month; i++) {
					this.date.days += new Date(year, i, 0).getDate();
				};
				return this.date.days + day;
			}
		}
})
