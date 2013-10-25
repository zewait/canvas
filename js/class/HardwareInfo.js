/**
 * Created by 黄世凡 on 13-10-24.
 * Email: here.wait.go@gmail.com
 */

var HardwareInfo =
{
    createNew: function()
    {
        var hardwareInfo = {};
        hardwareInfo.windowInfo = function()
        {
            var s = "";
            s += " 网页可见区域宽：" + document.body.clientWidth;
            s += "\n";
            s += " 网页可见区域高：" + document.body.clientHeight;
            s += "\n";
            s += " 网页可见区域宽：" + document.body.offsetWidth + " (包括边线和滚动条的宽)";
            s += "\n";
            s += " 网页可见区域高：" + document.body.offsetHeight + " (包括边线的宽)";
            s += "\n";
            s += " 网页正文全文宽：" + document.body.scrollWidth;
            s += "\n";
            s += " 网页正文全文高：" + document.body.scrollHeight;
            s += "\n";
            s += " 网页被卷去的高(ff)：" + document.body.scrollTop;
            s += "\n";
            s += " 网页被卷去的高(ie)：" + document.documentElement.scrollTop;
            s += "\n";
            s += " 网页被卷去的左：" + document.body.scrollLeft;
            s += "\n";
            s += " 网页正文部分上：" + window.screenTop;
            s += "\n";
            s += " 网页正文部分左：" + window.screenLeft;
            s += "\n";
            s += " 屏幕分辨率的高：" + window.screen.height;
            s += "\n";
            s += " 屏幕分辨率的宽：" + window.screen.width;
            s += "\n";
            s += " 屏幕可用工作区高度：" + window.screen.availHeight;
            s += "\n";
            s += " 屏幕可用工作区宽度：" + window.screen.availWidth;
            s += "\n";

            s += " 你的屏幕设置是 " + window.screen.colorDepth + " 位彩色";
            s += "\n";
            s += " 你的屏幕设置 " + window.screen.deviceXDPI + " 像素/英寸";
            s += "\n";
            console.log(s);
        }
        return hardwareInfo;
    }
}
