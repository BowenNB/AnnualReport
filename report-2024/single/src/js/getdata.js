import http from './http';
import { reactive } from 'vue';




/**********第一页************/
// Welcome.vue
// 欢迎页数据
export const Welcome_data = reactive({
    avatarSrc: './header/header7.webp',
    nickname: "初霜",
    descriptionText: {
        hello: "Hello World!",
        text1: "时光荏苒，转眼间我们又走过了一年。",
        text2: "在过去的365天里，从深夜的长谈到清晨的祝福，从好友间的调侃到工作中的忙碌……",
        text4: "这些聊天记录，是属于你的独家记忆。",
        text7: "打开报告，开启你的专属年度记忆吧！"
    }
});



/**********第二页************/
// ChatData.vue
// 全年消息统计数据
export var statsData = {
    // 一年中的天数
    daysInWeChat: 365, 
    // 聊天人数
    numOfFriends: 113,
    // 发出的消息数
    messagesSent: 14404,
    // 收到的消息数
    messagesReceived: 18708,
    // 总字数
    totalWords: 493092
};


/**********第三页************/
// TimePeriod.vue
// 聊天时段分布数据
export const xAxisData = ['00', '01, 02', '03', '04', '05', '06', '07', '08, 09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];

// 用于生成示例数据的函数（模拟聊天频率等数据）
export const generateData = () => {
    const data = [];
    for (let i = 0; i < 24; i++) {
        data.push(Math.floor(Math.random() * 100) + 1);
    }
    return data;
};
export var yAxisData = [
    668,
    412,
    7,
    0,
    0,
    4,
    0,
    63,
    14,
    195,
    576,
    564,
    627,
    554,
    561,
    589,
    736,
    539,
    743,
    754,
    656,
    791,
    1187,
    875
];



export const seasonColors = ['#1E90FF'];

// 图表标题文本
export const chartTitle = '2024聊天时段分布图';

// 描述相关文本
export var chatdescription = {
    sumUp: '你最爱深夜与人聊天',
    left: {
        prefix: '深夜的',
        timePeriod: '22: 00 - 24: 00',
        suffix: '是你全年最爱聊天的时间段',
    },
    right: ['每一次深夜的对话', '都是灵魂的一次旅行'],
};


/**********第四页************/
// Steps.vue
// 一年中的步数数据
export const stepdescription = {
    sumUp: '行万里路',
    left: {
        totalStepsPrefix: '年度总步数',
        totalSteps: 3045987,
        distancePrefix: '相当于走了',
        distance: 3400,
        distanceSuffix: '公里',
        earthPrefix: '绕了地球',
        earthRounds: 0.2,
        earthSuffix: '圈',
    },
    right: {
        year: '2024',
        month: '08',
        day: '01',
        stepsPrefix: '达成',
        steps: 37687,
        stepsSuffix: '步',
        message: '这一天，走过的是未知的风景，留下的是每一步的精彩',
    },
};

const stepReference = {
    '绕了故宫':4.2,
    '绕了地球':40075,
}

import * as echarts from 'echarts';
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



export var  stepData = getVirtualData('2024');



/**********第五页************/
// Keyword.vue
export const keywordsData = reactive({
    keyword: "永远",
    keyword_num: 1568,
    messages : [
        {
            content: "有空",
            avatarSrc: "'./header/header22.webp'"
        },
        {
            content: "OK，可以等有空开个腾讯会议",
            avatarSrc: "'./header/header23.webp'"
        },
        {
            content: "那定个具体时间吧",
            avatarSrc: "'./header/header22.webp'"
        },
        // 可以继续添加更多消息对象，按照实际需求来模拟更多聊天记录
    ],
    chart_option:{},
    word_counter:[
        ["永远",1568],
        ["人工智能", 120],
        ["机器学习", 110],
        ["深度学习", 100],
        ["数据分析", 95],
        ["自然语言处理", 90],
        ["计算机视觉", 85],
        ["神经网络", 80],
        ["算法", 75],
        ["自动化", 70],
        ["大数据", 65],
        ["智能算法", 60],
        ["预测模型", 55],
        ["强化学习", 50],
        ["数据挖掘", 45],
        ["虚拟助手", 40],
        ["智能推荐", 38],
        ["图像识别", 37],
        ["语音识别", 36],
        ["边缘计算", 35],
        ["机器人", 34],
        ["智能家居", 33],
        ["无人驾驶", 32],
        ["区块链", 31],
        ["云计算", 30],
        ["数据科学", 29],
        ["智能制造", 28],
        ["人机交互", 27],
        ["情感分析", 26],
        ["自动驾驶", 25],
        ["知识图谱", 24],
        ["医疗", 23],
        ["城市", 22],
        ["虚拟现实", 21],
        ["增强现实", 20],
        ["生物识别", 19],
        ["语义理解", 18],
        ["客服", 17],
        ["视觉", 16],
        ["推荐系统", 15],
        ["监控", 14],
        ["数据可视化", 13],
        ["聊天机器人", 12],
        ["教育", 11],
        ["分析", 10],
        ["人脸识别", 9],
        ["图像生成", 8],
        ["算法优化", 7],
        ["交通", 6],
        ["数据治理", 5],
        ["量子计算", 4],
        ["金融", 3],
        ["农", 2],
        ["信息安全", 1],
        ["人工神经网络", 1],
        ["深度强化学习", 1],
        ["自适应系统", 1],
        ["知识自动化", 1],
        ["智能感知", 1],
        ["智能合约", 1],
        ["机器翻译", 1],
        ["数据伦理", 1],
        ["智能化转型", 1],
        ["计算机辅助设计", 1],
        ["智能决策", 1],
        ["人机协作", 1],
        ["智能监测", 1],
        ["情境感知", 1],
        ["多模态学习", 1],
        ["生物信息学", 1],
        ["智能分析平台", 1],
        ["人类增强", 1],
        ["智能音箱", 1],
        ["智能穿戴", 1],
        ["智能物流", 1],
        ["数据安全", 1],
        ["智能社交", 1],
        ["内容生成", 1],
        ["图像处理", 1],
        ["深度生成模型", 1],
        ["语音助手", 1],
        ["环境监测", 1],
        ["健康管理", 1],
        ["客服系统", 1],
        ["金融科技", 1],
        ["城市管理", 1],
        ["设备", 1],
        ["电", 1],
        ["环境", 1],
        ["数据分析", 1],
        ["预测", 1],
        ["决策支持", 1],
            ["量子力学", 1120],
            ["波粒二象性", 110],
            ["量子纠缠", 1010],
            ["不确定性原理", 195],
            ["量子态", 910],
            ["量子隧穿", 585],
            ["量子叠加", 780],
            ["测量问题", 675],
            ["信息", 770],
            ["计算", 265],
            ["通信", 640],
            ["量子比特", 565],
            ["场论", 570],
            ["玻尔模型", 645],
            ["海森堡", 240],
            ["薛定谔方程", 1338],
            ["泡利不相容原理", 437],
            ["量子力场", 316],
            ["量子态密度", 315],
            ["干涉", 434],
            ["光学", 336],
            ["动力学", 532],
            ["热力学", 31],
            ["量子算法", 310],
            ["模拟", 209],
            ["测量", 284],
            ["相变", 217],
            ["量子纠错", 26],
            ["量子网络", 245],
            ["量子材料", 24],
            ["量子磁性",523],
            ["量子计算机", 622],
            ["量子态转移", 721],
            ["量子电动力学", 820],
            ["量子引力", 919],
            ["量子场", 118],
            ["量子物质", 17],
            ["量子宇宙学", 16],
            ["量子统计", 15],
            ["量子光子学", 14],
            ["量子噪声", 13],
            ["量子纠缠态", 12],
            ["量子干涉实验", 11],
            ["量子传输", 10],
            ["量子光源", 9],
            ["量子态操控", 8],
            ["量子测量理论", 7],
            ["量子波动", 6],
            ["量子力学基础", 5],
            ["量子计算理论", 4],
            ["量子信息科学", 3],
            ["量子物理实验", 2],
            ["量子态重整", 1],
            ["信息处理", 1],
            ["相干性", 1],
            ["量子态演化", 1],
            ["量子力学解释", 1],
            ["量子光谱", 1],
            ["量子相互作用", 1],
            ["量子态测量", 1],
            ["量子态生成", 1],
            ["量子隐形传态", 1],
            ["计算机", 1],
            ["逻辑门", 1],
            ["算法优化", 1],
            ["量子计算应用", 1],
            ["智能", 1],
            ["前沿", 1],
            ["相对论", 1],
            ["物理学基础", 1],
            ["系统", 1],
            ["信息理论", 1],
            ["物理", 1],
            ["技术", 1]        
    ]
});



/**********第七页************/
// Emotion.vue
export const quarterData = reactive(
    {
        quarter_summary_data : [
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
        ]
}
);



/**********第六页************/
// 月度好友数据
// MonthFriends.vue
export const monthFriendsData = reactive(
    {
        month_data:[
            { month: "1月", nickname: "梦游的星星", className: "passion", num: 100, avatar: './header/header12.webp' },
            { month: "2月", nickname: "流水潺潺", className: "passion", num: 80, avatar: './header/header13.webp' },
            { month: "3月", nickname: "微笑的沙滩", className: "passion", num: 100, avatar: './header/header14.webp' },
            { month: "4月", nickname: "迷雾森林", className: "relax", num: 100, avatar: './header/header15.webp' },
            { month: "5月", nickname: "彩虹泡泡", className: "relax", num: 1200, avatar: './header/header16.webp' },
            { month: "6月", nickname: "星辰大海", className: "relax", num: 100, avatar: './header/header17.webp' },
            { month: "7月", nickname: "甜蜜的旋律", className: "relax", num: 100, avatar: './header/header18.webp' },
            { month: "8月", nickname: "暖阳下的影子", className: "relax", num: 100, avatar: './header/header19.webp' },
            { month: "9月", nickname: "书香茶韵", className: "relax", num: 100, avatar: './header/header21.webp' },
            { month: "10月", nickname: "繁花似锦", className: "relax", num: 10, avatar: './header/header31.webp' },
            { month: "11月", nickname: "星空旅人", className: "relax", num: 100, avatar: './header/header41.webp' },
            { month: "12月", nickname: "追风的云彩", className: "happy", num: 800, avatar: './header/header11.webp' },
      ]
    }
)



/**********第六页************/
// Friends.vue
// 定义聊天好友数据数组，每个元素代表一个好友的相关信息
export const chatFriendsData = reactive({
    chatFriends:[
        {
            name: "Dreamer",
            messageCount: "66371条消息",
            wordCount: "262178字",
            avatarSrc: './header/header31.webp'
        },
        {
            name: "千里追光",
            messageCount: "26637条消息",
            wordCount: "162178字",
            avatarSrc: './header/header32.webp'
        },
        {
            name: "晨曦暖阳",
            messageCount: "6637条消息",
            wordCount: "12178字",
            avatarSrc: './header/header35.webp'
        },
        {
            name: "送你一朵小红花",
            messageCount: "637条消息",
            wordCount: "8178字",
            avatarSrc: './header/header34.webp'
        },
        {
            name: "海风轻语",
            messageCount: "37条消息",
            wordCount: "6178字",
            avatarSrc: './header/header33.webp'
        },
    ]
});



/**********第页************/
// 历年年度好友数据
// YearFriends.vue
export const yearFriendsData = reactive({
    year_data:[
        { year: 2024, avatar: './header/header1.webp', nickname: '北风吹雪' },
        { year: 2023, avatar: './header/header2.webp', nickname: '微光拾忆' },
        { year: 2022, avatar: './header/header5.webp', nickname: '浮生一梦' },
        { year: 2021, avatar: './header/header6.webp', nickname: '任然' },
        { year: 2020, avatar: './header/header19.webp', nickname: '花开半夏' },
    ],
})


/**********第七页************/
// Card.vue
// wechatReport.js
export const wechatReportData = reactive({
    // 已经完成请求的数据数量
    readyDataNum :0,
    totalDataNum: 6,
    // 头像链接
    avatarSrc : Welcome_data.avatarSrc,
    // 昵称
    nickname : Welcome_data.nickname,
    // 报告名称
    reportName : '微信聊天报告',
    // 好友列表
    friends : [
        { name: 'Dreamer', avatarSrc: './header/header31.webp' },
        { name: '神里凌华', avatarSrc: './header/header5.webp' },
        { name: '甘雨', avatarSrc: './header/header6.webp' },
        { name: '懒羊羊', avatarSrc: './header/header7.webp' },
        { name: '半夏', avatarSrc: './header/header19.webp' },
        { name: '海风轻语', avatarSrc: './header/header33.webp' },
    ],
    // 总结文本
    summaryText : '真挚浪漫的熬夜冠军',
    // 左侧标签数据（包含聊天联系人数量、发送消息数量、收到消息数量、总字数等信息）
    leftTags : [
        { label: '聊天联系人', value: 113, unit: '人' },
        { label: '发送消息', value: 10786, unit: '条' },
        { label: '收到消息', value: 33594, unit: '条' },
        { label: '发送总字数', value: 493092, unit: '' },
    ],
    // 右侧标签数据（包含年度关键词、活跃时段、常用表情包等信息）
    rightTags : [
        { label: '年度关键词', value: '哈哈哈' },
        { label: '活跃时段', value: '22:00-05:00' },
        { label: '常用表情包', image: './header/header48.webp' },
    ],
    // 网站链接
    websiteUrl : 'https://memotrace.cn',
    // 网站链接文本显示内容
    websiteUrlText : 'memotrace.cn',
    // 底部文本
    bottomText : '扫一扫制作专属你的微信聊天报告',
})