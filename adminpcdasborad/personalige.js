const pErsonnalige = () => {
    (async function ($) {
        $(".loadavideo").css("display", "block");
        $("#slidea").css("background-image", "url(./assetss/loadingc.gif)");
        $("#slideb").css("background-image", "url(./assetss/loadingc.gif)");
        $("#slidec").css("background-image", "url(./assetss/loadingc.gif)");

        $("#phonea").css("background-image", "url(./assetss/loadingc.gif)");
        $("#phoneb").css("background-image", "url(./assetss/loadingc.gif)");
        $("#phonec").css("background-image", "url(./assetss/loadingc.gif)");

        $("#backglise").css("background-image", 'url(./assetss/loadingc.gif)');
        $("#logoextern").attr("src", "./assetss/loadingc.gif");
        $("#loginimg").attr("src", "./assetss/loadingc.gif");
 
        if (annoncePers && annoncePers.length > 0) {
            $("#slidea").css("background-image", `url(${annoncePers.find(item => item.which === "slidea") ? annoncePers.find(item => item.which === "slidea").image : "../assets/img/error-404.png"})`);
            $("#slideb").css("background-image", `url(${annoncePers.find(item => item.which === "slideb") ? annoncePers.find(item => item.which === "slideb").image : "../assets/img/error-404.png"})`);
            $("#slidec").css("background-image", `url(${annoncePers.find(item => item.which === "slidec") ? annoncePers.find(item => item.which === "slidec").image : "../assets/img/error-404.png"})`);
            document.getElementById('slideaid').value = `${annoncePers.find(item => item.which === "slidea") ? annoncePers.find(item => item.which === "slidea")._id : "huhed9683e"}`;
            document.getElementById('slidebid').value = `${annoncePers.find(item => item.which === "slideb") ? annoncePers.find(item => item.which === "slideb")._id : "huhed9683e"}`;
            document.getElementById('slidecid').value = `${annoncePers.find(item => item.which === "slidec") ? annoncePers.find(item => item.which === "slidec")._id : "huhed9683e"}`;

            $("#phonea").css("background-image", `url(${annoncePers.find(item => item.which === "phonea") ? annoncePers.find(item => item.which === "phonea").image : "../assets/img/error-404.png"})`);
            $("#phoneb").css("background-image", `url(${annoncePers.find(item => item.which === "phoneb") ? annoncePers.find(item => item.which === "phoneb").image : "../assets/img/error-404.png"})`);
            $("#phonec").css("background-image", `url(${annoncePers.find(item => item.which === "phonec") ? annoncePers.find(item => item.which === "phonec").image : "../assets/img/error-404.png"})`);
            document.getElementById('phoneaid').value = `${annoncePers.find(item => item.which === "phonea") ? annoncePers.find(item => item.which === "phonea")._id : "huhed9683e"}`;
            document.getElementById('phonebid').value = `${annoncePers.find(item => item.which === "phoneb") ? annoncePers.find(item => item.which === "phoneb")._id : "huhed9683e"}`;
            document.getElementById('phonecid').value = `${annoncePers.find(item => item.which === "phonec") ? annoncePers.find(item => item.which === "phonec")._id : "huhed9683e"}`;


            document.getElementById('slidedid').value = `${annoncePers.find(item => item.which === "baVdeo") ? annoncePers.find(item => item.which === "baVdeo")._id : "huhed9683e"}`;
            $("#chanVideo").attr("src", `${annoncePers.find(item => item.which === "baVdeo") ? annoncePers.find(item => item.which === "baVdeo").image : "../assets/background.webm"}`);
            $("#baVdeo")[0].load();
            $("#baVdeo")[0].play();


            $("#backglise").css("background-image", `url(${annoncePers.find(item => item.which === "backglise") ? annoncePers.find(item => item.which === "backglise").image : "../assets/img/error-404.png"})`);
            $("#logoextern").attr("src", `${annoncePers.find(item => item.which === "logoextern") ? annoncePers.find(item => item.which === "logoextern").image : "../assets/img/matasa.png"}`);
            $("#logointern").attr("src", `${annoncePers.find(item => item.which === "logointern") ? annoncePers.find(item => item.which === "logointern").image : "../assets/img/matasa.png"}`);
            $("#loginimg").css("background-image", `url(${annoncePers.find(item => item.which === "loginimg") ? annoncePers.find(item => item.which === "loginimg").image : "../assets/img/error-404.png"})`);
            document.getElementById('backgliseid').value = `${annoncePers.find(item => item.which === "backglise") ? annoncePers.find(item => item.which === "backglise")._id : "huhed9683e"}`;
            document.getElementById('logoexternid').value = `${annoncePers.find(item => item.which === "logoextern") ? annoncePers.find(item => item.which === "logoextern")._id : "huhed9683e"}`;
            document.getElementById('logointernid').value = `${annoncePers.find(item => item.which === "logointern") ? annoncePers.find(item => item.which === "logointern")._id : "huhed9683e"}`;
            document.getElementById('loginimgid').value = `${annoncePers.find(item => item.which === "loginimg") ? annoncePers.find(item => item.which === "loginimg")._id : "huhed9683e"}`;
            $(".loadavideo").css("display", "none");

        } else {
            $("#chanVideo").attr("src", "../assets/background.webm");
            $("#baVdeo")[0].load();
            $("#baVdeo")[0].play();

            $("#slidea").css("background-image", "url(../assets/img/error-404.png)");
            $("#slideb").css("background-image", "url(../assets/img/error-404.png)");
            $("#slidec").css("background-image", "url(../assets/img/error-404.png)");

            $("#phonea").css("background-image", "url(../assets/img/error-404.png)");
            $("#phoneb").css("background-image", "url(../assets/img/error-404.png)");
            $("#phonec").css("background-image", "url(../assets/img/error-404.png)");

            $("#backglise").css("background-image", 'url(../assets/img/error-404.png)');
            $("#logoextern").attr("src", "../assets/img/matasa.png");
            $("#logointern").attr("src", "../assets/img/matasa.png");
            $("#loginimg").css("background-image", "url(../assets/img/error-404.png)");
            $(".loadavideo").css("display", "none");

        };

    })(jQuery);
}
