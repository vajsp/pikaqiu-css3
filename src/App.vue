<template>
  <div id="app">
    <StyleEditor ref="styleEditor" :code="currentStyle"></StyleEditor>
    <ResumeEditor ref="resumeEditor" :markdown="currentMarkdown" :enableHtml="enableHtml"></ResumeEditor>
  </div>
</template>

<script>
import StyleEditor from './components/StyleEditor';
import ResumeEditor from './components/ResumeEditor';
import './assets/reset.css';

export default {
    name: 'app',
    components: {
        StyleEditor,
        ResumeEditor
    },
    data() {
        return {
            interval: 20,
            currentStyle: '',
            enableHtml: false,
            fullStyle: [
                `/*
* Inspired by http://strml.net/
* 大家好，我是方方
* 二月了，好多公司都在招聘，你是不是也在准备简历呀。
* 说做就做，我也来写一份简历！
*/

/* 首先给所有元素加上过渡效果 */
* {
  transition: all .3s;
}
/* 白色背景太单调了，我们来点背景 */
html {
  color: rgb(222,222,222);
  background: rgb(0,43,54);
}
::-webkit-scrollbar {
    width: 0;   /* 滚动条宽度为0 */
    height: 0; /* 滚动条高度为0 */
    display: none; /* 滚动条隐藏 */
}
/* 文字离边框太近了 */
.styleEditor {
  padding: .5em;
  border: 1px solid;
  margin: .5em;
  overflow: auto;
  width: 45vw; height: 90vh;
}
/* 代码高亮 */
.token.selector{ color: rgb(133,153,0); }
.token.property{ color: rgb(187,137,0); }
.token.punctuation{ color: yellow; }
.token.function{ color: rgb(42,161,152); }

/* 加点 3D 效果呗 */
html{
  perspective: 1000px;
}
.styleEditor {
  position: fixed; left: 0; top: 0;
  -webkit-transition: none;
  transition: none;
  -webkit-transform: rotateY(10deg) translateZ(-100px) ;
          transform: rotateY(10deg) translateZ(-100px) ;
}

/* 接下来我给自己准备一个编辑器 */
.resumeEditor{
  position: fixed; right: 0; top: 0;
  padding: .5em;  margin: .5em;
  width: 48vw; height: 90vh;
  border: 1px solid;
  background: white; color: #222;
  overflow: auto;
}

* {
            margin: 0;
            padding: 0;
        }

        * {
            box-sizing: border-box;
        }

        *::before {
            box-sizing: border-box;
        }

        *::after {
            box-sizing: border-box;
        }

        .resumeEditor {
            background: #FFE600;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }

        #container {
            height: 300px;
            width: 460px;
            position: relative;
        }

        #nose {
            position: absolute;
            left: 50%;
            margin-left: -15px;
            top: 100px;
            border: 15px solid transparent;
            z-index: 2;
            border-radius: 50%;
            border-top-color: black;

        }

        #nose:hover {
            animation: 0.1s xxx 0s infinite alternate;
        }

        .eye {
            position: absolute;
            width: 60px;
            height: 60px;
            background: #2E2E2E;
            border: 2px solid black;
            border-radius: 30px;
            top: 65px;
        }

        .eye::before {
            content: '';
            display: block;
            width: 30px;
            height: 30px;
            background: white;
            border-radius: 15px;
            top: 0;
            position: absolute;
            left: 6px;
            border: 2px solid black;
        }

        .eye-left {
            right: 50%;
            margin-right: 90px;
        }

        .eye-right {
            left: 50%;
            margin-left: 90px;
        }

        .upperLip {
            position: absolute;
            top: 110px;
            width: 100%;
            display: flex;
            justify-content: center;
            z-index: 1;
        }

        .upperLip::before {
            content: '';
            display: block;
            width: 80px;
            height: 30px;
            border: 3px solid black;
            border-top: none;
            border-right: none;
            border-bottom-left-radius: 50px 30px;
            transform: rotateZ(-20deg);

            background: #FFE600;
        }

        .upperLip::after {
            content: '';
            display: block;
            width: 80px;
            height: 30px;
            border: 3px solid black;
            border-top: none;
            border-left: none;
            border-bottom-right-radius: 50px 30px;
            transform: rotateZ(20deg);

            background: #FFE600;
        }

        .lowerLip-wrapper {
            position: absolute;
            width: 100%;
            top: 120px;
            height: 200px;
            overflow: hidden;
        }

        .lowerLip {
            position: absolute;
            border: 5px solid black;
            width: 200px;
            bottom: 0;
            height: 1800px;
            left: 50%;
            transform: translateX(-50%);
            border-top: none;
            border-bottom-left-radius: 100px 900px;
            border-bottom-right-radius: 100px 900px;
            border-top-left-radius: 100px 100px;
            border-top-right-radius: 100px 100px;
            background: #FF485F;
            box-shadow: inset 0 1610px 0 20px #9B000A;
        }

        .face {
            border: 3px solid black;
            position: absolute;
            width: 90px;
            height: 90px;
            border-radius: 45px;
            top: 160px;
            background: #FF0000;

        }

        .face-left {
            right: 50%;
            margin-right: 130px;
        }

        .face-right {
            left: 50%;
            margin-left: 130px;
        }

        @keyframes xxx {
            0% {
                transform: rotateZ(-3deg);
            }
            100% {
                transform: rotateZ(3deg);
            }
        }

/* 好了，我开始写简历了 */


`
            ],
            currentMarkdown: '',
            fullMarkdown: ``
        };
    },
    created() {
        this.makeResume();
    },

    methods: {
        makeResume: async function() {
            await this.progressivelyShowStyle(0);
        },
        showHtml: function() {
            return new Promise((resolve, reject) => {
                this.enableHtml = true;
                resolve();
            });
        },
        progressivelyShowStyle(n) {
            return new Promise((resolve, reject) => {
                let interval = this.interval;
                let showStyle = async function() {
                    let style = this.fullStyle[n];
                    if (!style) {
                        return;
                    }
                    // 计算前 n 个 style 的字符总数
                    let length = this.fullStyle
                        .filter((_, index) => index <= n)
                        .map(item => item.length)
                        .reduce((p, c) => p + c, 0);
                    let prefixLength = length - style.length;
                    if (this.currentStyle.length < length) {
                        let l = this.currentStyle.length - prefixLength;
                        let char = style.substring(l, l + 1) || ' ';
                        this.currentStyle += char;
                        if (
                            style.substring(l - 1, l) === '\n' &&
                            this.$refs.styleEditor
                        ) {
                            this.$nextTick(() => {
                                this.$refs.styleEditor.goBottom();
                            });
                        }
                        setTimeout(showStyle, interval);
                    } else {
                        resolve();
                    }
                }.bind(this);
                showStyle();
            });
        },
        progressivelyShowResume() {
            return new Promise((resolve, reject) => {
                let length = this.fullMarkdown.length;
                let interval = this.interval;
                let showResume = () => {
                    if (this.currentMarkdown.length < length) {
                        this.currentMarkdown = this.fullMarkdown.substring(
                            0,
                            this.currentMarkdown.length + 1
                        );
                        let lastChar = this.currentMarkdown[
                            this.currentMarkdown.length - 1
                        ];
                        let prevChar = this.currentMarkdown[
                            this.currentMarkdown.length - 2
                        ];
                        if (prevChar === '\n' && this.$refs.resumeEditor) {
                            this.$nextTick(() =>
                                this.$refs.resumeEditor.goBottom()
                            );
                        }
                        setTimeout(showResume, interval);
                    } else {
                        resolve();
                    }
                };
                showResume();
            });
        }
    }
};
</script>

<style scoped>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

html {
    min-height: 100vh;
}
* {
    box-sizing: border-box;
}
</style>
