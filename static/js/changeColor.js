// Function
const changeColor = ({
    fromColor,
    toColor,
    i = 0,
    scope = gsap,
    method = "set",
    duration = 0,
}) => {
    console.log(method, fromColor, toColor);
    // text color
    let textColor = [
        "*",
        {
            color: fromColor,
        },
        {
            color: toColor,
            ease: "power1.in",
            duration,
        },
        i + 0.1,
    ];
    textColor =
        method == "set" ? textColor.filter((v, i) => i != 1) : textColor;
    scope[method](...textColor);
    // menu icon color
    let menuIcon = [
        ".menuIcon path, .logo circle",
        {
            stroke: fromColor,
        },
        {
            stroke: toColor,
            ease: "power1.in",
            duration,
        },
        i + 0.1,
    ];
    menuIcon = method == "set" ? menuIcon.filter((v, i) => i != 1) : menuIcon;
    scope[method](...menuIcon);
    // nicescroll curser color
    let nicescrollCurser = [
        ".nicescroll-cursors",
        {
            background: fromColor,
        },
        {
            background: toColor,
            duration,
        },
        i + 0.1,
    ];
    nicescrollCurser =
        method == "set"
            ? nicescrollCurser.filter((v, i) => i != 1)
            : nicescrollCurser;
    scope[method](...nicescrollCurser);
};
// export
export { changeColor };
