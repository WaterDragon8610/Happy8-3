var ten = document.getElementById("ten");
var button = document.querySelector("#nut");
var container = document.querySelector(".container");

button.addEventListener("click", function() {
    var dulieu = ten.value;
    var block = document.createElement("div");
    block.classList.add("loichuc");
    document.body.appendChild(block);
    if (dulieu == "Đ.N.T.Trúc") {
      block.innerHTML = '<p>Chúc Trúc < Túc > có một ngày 8/3 thật là zuii zẻ nà. Mong rằng Túc ngày càng xinh đẹp hơn và cười nhiều hơn nhee. Mong mọi điều may mắn luôn đến với Túc nè. Và quan trọng nhất là phải hạnh phúc với những gì mình có nhaa.</p>'
      container.classList.add("an");
    } else if (dulieu == "N.N.G.Hân") {
        block.innerHTML = '<p>Nguyễn Ngọc Gia Hân - Hí lô mai vbelch , nhân ngày 8/3 anhh chúc bé anh gặp nhiều may mắn trong cuộc sống và học tập nhé, à chúc em nhiều sức khỏee nữa, nghe lời anh vô, phải biết bảo vệ sức khỏe của mình, mãii yêuu boy nhéee, anh yêu em Tên người viết: your cpink</p><img src="./b4d390bf-b4be-48bc-b31d-f98a017fd2e0.jpg" alt="" id="quang">';
        container.classList.add("an");
    } else if (dulieu == "V.T.Uyên") {
        block.innerHTML = '<p>"Hôm nay là ngày 8/3 ngày Quốc tế Phụ nữ 💐, dù biết cậu còn trẻ trâu chưa đến tuổi đó 🤣 nhưng vì cậu là bé iu của tớ nên...✨ Chúc cậu có một ngày 8/3 thật vui vẻ và tràn đầy hạnh phúc! ✨ Mong rằng cuộc sống sau này của cậu sẽ luôn rực rỡ như ánh mặt trời ☀️, có thêm nhiều bạn tốt 👭, học giỏi siêu cấp vũ trụ 📚💯, và đặc biệt là luôn khỏe mạnh 💪. Dù có chuyện gì xảy ra, hãy giữ nụ cười trên môi và luôn suy nghĩ tích cực nheee! 😊💖 Hãy luôn là chính mình, sống hết mình với thanh xuân này, và đặc biệt là hãy bên tớ thật lâu nhaaaa! 💖 Mong rằng chúng ta sẽ cùng nhau vẽ nên những kỷ niệm rực rỡ nhất của tuổi học trò 🎨📖, để sau này nhìn lại sẽ chẳng hối tiếc. Cảm ơn vì đã xuất hiện trong thanh xuân của tớ! 🥰💞👑 Chúc "công chúa" của tớ luôn xinh đẹp, rạng rỡ và được yêu thương thật nhiều! 👑 Happy Womens Day! 💃🎉" bơ iuuuuuu</p><img src="./tải xuống.jpg" alt="" id="quang">';
        container.classList.add("an");
    } else if (dulieu == "H.T.T.Trúc") {
        block.innerHTML = '<p>Chúc yomost ngày 8/3 đầy vui vẻ, hạnh phúc như cách cậu mang đến cho mọi người và đem đến sự ngọt ngào dành cho tớ<3. Chúc cho mọi điều cậu mong muốn đều thành hiện thực><</p><img src="./2.jpg" alt="" id="tbao">';
        container.classList.add("an");
    } else if (dulieu == "N.P.M.Kha") {
        block.innerHTML = '<p>Nhân ngày 8/3 này mình chúc cho Kha ngày càng xinh đẹp, vui vẻ và đạt được những thành tích cao trong học tập, cố gắng vượt qua mọi khó khăn trong cuộc sống và khuôn mặt mỗi ngày luôn nở nụ cười rạng rỡ và tràn đầy niềm vui</p>'
        container.classList.add("an");
    } else if (dulieu == "T.H.B.Ngọc") {
        block.innerHTML = '<p>Chúc THB Ngọc 8/3 này thật vui vẻ mạnh khoẻ bên gia đình người thân chinh phục được ước mơ của mình và cố gắng trên con đường mình đặt ra mãi xinh đẹp cute không được ovtk nha con gấu dâuuu</p>'
        container.classList.add("an");
    } else if (dulieu == "N.T.Trà") {
        block.innerHTML = '<p>Chúc choaa Trà ăn màu chóng lớn , xinhhh xinhhh thêm và......... Hiền hiền .My love hahaahahaha</p>'
        container.classList.add("an");
    } else if (dulieu == "N.N.P.Anh") {
        block.innerHTML = '<p>Chúc  Phương Anh 1 ngày 8/3 thật vui vẻ. Ngày càng xinh đẹp, đạt những thành công trong cuộc sống và gặp thật nhiều may mắn, đặc biệt là oánh cầu lông hay nhứt khối nữ</p>'
        container.classList.add("an");
    } else if (dulieu == "H.N.N.Thảo") {
        block.innerHTML = '<p>Chúc Như Thảo ngày 8/3 tràn đầy năng lượng và yêu thương. Luôn xinh đẹp, gặp nhiều may mắn và đạt những kết quả mong muốn.</p>'
        container.classList.add("an");
    } else if (dulieu == "N.D.B.Tiên") {
        block.innerHTML = '<p>Chúc Bảo Tiên 1 ngày 8/3 thật vui vẻ. Ngày càng xinh đẹp, đạt những thành công trong cuộc sống và gặp thật nhiều may mắn.</p>'
        container.classList.add("an");
    } else if (dulieu == "T.N.Q.My") {
        block.innerHTML = '<p>Quỳnh My Chúc cậu có được một ngày 8/3 vui vẻ nhất mong rằng cậu sẽ có được những thành tích cao và mong tương lai của cậu sẽ sáng mở và luôn nở nụ cười trên môi dẫu có chuyện gì xảy ra . Thi IELTS 9.0</p><img src="./32.jpg" alt="" id="tuan">'
        container.classList.add("an");
    } else if (dulieu == "N.C.P.Tiên") {
        block.innerHTML = '<p>Ph Tiên Chúc ...một ngày 8/3 ngập tràn yêu thương và hạnh phúc. Mong rằng không chỉ hôm nay mà mỗi ngày trong cuộc sống, bạn đều được trân trọng, yêu thương và luôn mỉm cười rạng rỡ. Hãy tận hưởng ngày đặc biệt này theo cách tuyệt vời nhất nhé!</p>'
        container.classList.add("an");
    } else if (dulieu == "L.N.K.Linh") {
        block.innerHTML = '<p>Chúc Linh sẽ học giỏi hơn nx sớm đạt đc những gì mình muốn ko tự ti về bản thân</p>'
        container.classList.add("an");
    } else if (dulieu == "N.T.N.Hảo") {
        block.innerHTML = '<p>Chúc hảo hảo luôn vui vẻ tận hưởng được ngày 8/3 trọn vẹn , suông sẽ trong mọi chuyện</p>'
        container.classList.add("an");
    } else if (dulieu == "N.T.N.Bình") {
        block.innerHTML = '<p>Chúc Bình (bò,lọ,...) có một ngày 8/3 vui vẻ , học hành thật suông sẻ có đc nhiều niềm vui và bớt động tay chân lại xí :))</p>'
        container.classList.add("an");
    } else if (dulieu == "N.T.Q.Trang") {
        block.innerHTML = '<p>Chúc bạn của tôi ngày 8/3 thật hạnh phúc, cuộc sống luôn ngập tràn tiếng cười và niềm vui.</p>'
        container.classList.add("an");
    } else if (dulieu == "N.T.N.Minh") {
        block.innerHTML = '<p>I wish Minh will always be happy and not cry, soon find the goal in studying to achieve the desired results. Happy 8/3 🌸</p>'
        container.classList.add("an");
    } else if (dulieu == "H.T.B.Ngọc") {
        block.innerHTML = '<p>💖 Chúc bạn luôn có đủ kiên nhẫn để vượt qua khó khăn, đủ niềm vui để tô màu cho cuộc sống, đủ tự tin để theo đuổi ước mơ của mình! 🌷 vì bạn không chỉ đáng yêu mà còn siêu đáng trân trọng! Chúc bạn một ngày 8/3 thật ấm áp, rực rỡ và đáng nhớ! ✨💐🎉</p>'
        container.classList.add("an");
    } else if (dulieu == "N.B.Ngọc") {
        block.innerHTML = '<p>🌸 Chúc bạn mãi luôn xinh đẹp, vui vẻ và tràn đầy năng lượng tích cực. Dù có những ngày khó khăn, hãy luôn nhớ rằng bạn không hề cô đơn, vì tụi tớ luôn ở đây để ủng hộ và cổ vũ bạn! 💖 Hãy làm cho thanh xuân của mình thật rực rỡ nha! ✨💐</p>'
        container.classList.add("an");
    } else if (dulieu == "T.H.Ny") {
        block.innerHTML = '<p>Chúc bạn Ny 8/3 này vui vẻ an khang thịnh vượng vạn sự như ý xinh đẹp như hot gơn gặt hái nhiều thành quả và đạt nhiều thành công trên con đường của ny đã chọn-bff ny-</p>'
        container.classList.add("an");
    } else if (dulieu == "T.H.Trân") {
        block.innerHTML = '<p>Chúc trân sẽ sớm gặp được những người chồng của mình , sớm được gặp những thần tượng trong idol , và sớm đạt được ước mơ</p>'
        container.classList.add("an");
    } else if (dulieu == "T.P.Trang") {
        block.innerHTML = '<p>Chúc bạn sẽ có được thật nhiều niềm vui cx như may mắn , cố gắng đạt được những điều mình muốn vì tương lai xa</p>'
        container.classList.add("an");
    } else if (dulieu == "N.T.Y.Nhi") {
        block.innerHTML = '<p>chúc Nhi sẽ đạt được những gì mình đã ước muốn , luôn vui vẻ và hãy tự tin rằng bản thân mình làm được nhân ngày 8/3 chúc Nhi có được một kỉ niệm thật đáng nhớ</p>'
        container.classList.add("an");
    }


});

