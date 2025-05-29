import { ref } from 'vue';
import * as echarts from 'echarts';

export var key = '';

export const myavatar = ref('./header/header1.webp');
export const hisavatar = ref('./header/header2.webp');
export const mynickname = ref('文轩');
export const hisnickname = ref('嗷呜嗷呜');
export const daysSinceFirstChat = ref(970);
export const cardName = ref('微信聊天报告');


function getVirtualData(year) {
    const date = +echarts.time.parse(year + '-01-01');
    const end = +echarts.time.parse(+year + 1 + '-01-01');
    const dayTime = 3600 * 24 * 1000;
    const data = [];
    for (let time = date; time < end; time += dayTime) {
        data.push([
            echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),
            Math.floor(Math.random() * 10000)
        ]);
    }
    return data;
}

export const Calendardata = ref({
    daysChatted: 175,
    mostActiveYear: "2025",
    mostActiveMonth: "03",
    averageChats: 160,
    peakChatYear: "2025",
    peakChatMonth: "05",
    peakChatDay: "11",
    peakChats: 711,
    data: getVirtualData('2025'),
    max_day_count: 6411,
    min_day_count: 0
});


export const CardData = ref({
    myavatarSrc: './header/header1.webp',
    hisavatarSrc: './header/header2.webp',
    mynickname: '文轩',
    hisnickname: '嗷呜嗷呜',
    summaryText: '真挚浪漫的熬夜冠军',
    firstChatDate: '2022-09-29',
    mostChatYear: '2024',
    mostChatMonth: '04',
    mostChatCount: 2740,
    leftTags: [
        { label: '聊天天数', value: 206, unit: '天' },
        { label: '发送消息', value: 4631, unit: '条' },
        { label: '收到消息', value: 6484, unit: '条' },
        { label: '总字数', value: 89908, unit: '字' }
    ],
    rightTags: [
        { label: '年度关键词', value: '哈哈哈' },
        { label: '活跃时段', value: '22:00-02:00' },
        { label: '常用表情包', image: './header/header3.webp' }
    ]
})

export const chatData = ref({
    mynickname: "文轩",
    hisnickname: "嗷呜嗷呜",
    totalmessages: 27923,
    totalwords: 158624,
    totalvoice: 98,
    totalimages: 971,
    totalemojis: 3114,
    emoji: "./header/header3.webp",
    send_msg_num: 14776,
    receive_msg_num: 13147,
    total_message_size:2345, // 聊天数据大小，单位：MB
    my_type_count: [
        ['文本', 11579],
        ['图片', 634],
        ['语音', 92],
        ['视频', 28],
        ['表情包', 740],
        ['文件', 9]
    ],
    ta_type_count: [
        ['文本', 9354],
        ['图片', 337],
        ['语音', 6],
        ['视频', 9],
        ['表情包', 2374],
        ['文件', 0]
    ],
});

export const quarterData = ref([
    {
        'season': '春',
        'title': '春的呢喃',
        'text': '春天的气息悄然降临，万物复苏，花瓣在阳光下轻舞，似乎在低语着生命的奥秘。每一次呼吸都充满希望，梦想在心中悄然绽放。'
    },
    {
        'season': '夏',
        'title': '夏日的热情',
        'text': '炎炎夏日，阳光如金，海浪轻拍岸边，带来无限的欢愉。树荫下的微风，似乎诉说着青春的故事，令人心向往之，乐在其中。'
    },
    {
        'season': '秋',
        'title': '秋的沉思',
        'text': '秋天的落叶如诗，轻轻飘落，仿佛在叙述过往的回忆。金黄的田野上，丰收的喜悦萦绕心头，静谧中透出深邃的思考与感悟。'
    },
    {
        'season': '冬',
        'title': '冬的静谧',
        'text': '寒冬降临，银装素裹，世界在白雪的覆盖下沉睡。炉火旁的温暖，仿佛是心灵的慰藉，静静等待着春的再次来临，重燃希望。'
    }
]);

export const FirstData_isReady = ref(true);
export const firstChatData = ref({
    "firstChatDate": {
        "year": "2022",
        "month": "09",
        "day": "29"
    },
    "initiator": "嗷呜嗷呜",
    "conversation": [
        {
            "side": "right",
            "avatarSrc": "/header/header1.webp",
            "content": "学长好，打扰了。请问会计学院的导师有推荐么"
        },
        {
            "side": "left",
            "avatarSrc": "/header/header2.webp",
            "content": "会计学院不在沙河校区"
        },
        {
            "side": "right",
            "avatarSrc": "/header/header1.webp",
            "content": "哦哦好的！谢谢学长！"
        }
    ]
})

export const keyWordsData = ref({
    mykeyWord: {
        keyWord: '宝宝',
        keyWordCount: 63
    },
    takeyWord: {
        keyWord: '哈哈哈',
        keyWordCount: 96
    },
    messages: [
        { side: 'right', content: '超喜欢性格好的宝宝' },
        { side: 'right', content: '啊哈哈哈哈哈哈太可爱了宝宝' },
        { side: 'right', content: '去宝宝家' },
        { side: 'left',  content: '哈哈哈哈哈' },
        { side: 'left',  content: '哇哈哈哈' },
        { side: 'left',  content: '哈哈哈哈哈哈哈哈哈哈哈哈' }
    ]
});

export const mykeyWord = ref({
    "keyWord": "宝宝",
    "keyWordCount": 82
});

export const takeyWord = ref({
    "keyWord": "哈哈",
    "keyWordCount": 111
});

export const isReady = ref(false);
export const visibleText = ref([]);
export const currentIndex = ref(0);

export const Welcome_data = {
    descriptionText: {
        hello: "Hello World!",
        text1: "时光荏苒，转眼间我们陪伴了彼此很长的时间。",
        text2: "在过去的时间里，从深夜的长谈到清晨的祝福，从好友间的调侃到亲密关系中的关心……",
        text4: "这些聊天记录，是属于我们的独家记忆。",
        text7: "打开报告，开启我们的专属年度记忆吧！"
    }
}

export const allText = ref([
    Welcome_data.descriptionText.hello,
    Welcome_data.descriptionText.text1,
    Welcome_data.descriptionText.text2,
    Welcome_data.descriptionText.text4,
    Welcome_data.descriptionText.text7
])

export const chatdescription = ref({
    timedes: "晚上的",
    summary: "你们最爱在傍晚到午夜聊天",
    timePeriod: "20:00-00:00",
    quote: [
        "每一次热烈的对话",
        "都是灵魂的一次旅行"
    ],
    data: [
        102, 58, 12, 5, 3, 9, 17, 34, 79, 182, 315, 492,
        588, 543, 612, 701, 824, 756, 923, 1098, 1175, 842,
        409, 251
    ],
    remarks: [
        "你们聊到很晚",
        "那天一定有你们难忘的回忆吧"
    ],
    favoriteChatDate: {
        is_exist: 1,
        year: "2025",
        month: "05",
        day: "11"
    }
});

export const summaryText = ref('真挚浪漫的熬夜冠军');

export const wxid = 'wxid_mp0urvulan8e22';

// 头像链接
export const reportName = '2024微信聊天报告';
// 网站链接
export const websiteUrl = 'https://memotrace.cn';
// 网站链接文本显示内容
export const websiteUrlText = 'memotrace.cn';
// 底部文本
export const bottomText = '我爱你宝宝';

export const UPLOAD_URL = ''