async function makeScene(img) {
    let sceneName = await Dialog.prompt({
        title: "Name it",
        content: `
    <div style="padding: 5px">
    <label>Input a name:</label> <input type="text" id="nameofscene"
    name="nameofscene" value="" / autofocus>
    </div>
        `,
        callback: (html) => {
            return html.find("#nameofscene").val();
        },
    });

    var dummyImg = new Image();
    dummyImg.src = img;
    dummyImg.onload = async function () {
        var height = dummyImg.height * 0.5;
        var width = dummyImg.width * 0.5;
        await Scene.create({
            name: sceneName,
            backgroundColor: "#1c1c1c",
            img: img,
            grid: 70,
            tokenVision: false,
            fogExploration: false,
            active: false,
            width: height,
            height: width,
        });
        window.stop();
    };
}

let value = await new Promise((resolve) => {
    new FilePicker({
        type: "image",
        current: "assets/pickard/",
        callback: async function (imagePath) {
            resolve(await makeScene(imagePath));
        },
    }).browse("assets/pickard/");
});
