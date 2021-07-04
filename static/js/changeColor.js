const changeColor = ({
    color,
    i = 0,
    scope = gsap,
    method = "set",
    duration = 0,
}) => {
    // text color
    scope[method](
        "*",
        {
            color: color,
            ease: "power1.in",
            duration,
        },
        i + 0.1
    );
    // menu icon color
    scope[method](
        ".menuIcon path, .logo circle",
        {
            stroke: color,
            ease: "power1.in",
            duration,
        },
        i + 0.1
    );
    // nicescroll curser color
    scope[method](
        ".nicescroll-cursors",
        {
            background: color,
            duration,
        },
        i + 0.1
    );
};
// export
export { changeColor };
