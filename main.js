$(document).ready(function () {



    var player;
    var computer;
    var C1, C2, C3, C4, C5, C6, C7, C8, C9;
    var turn = 0;
    //$('table').hide();
    //$('#finalScreen').hide();
    $("#x").click(function () {
        console.log("usrer is x");
        player = 'X';
        computer = 'O';
    });
    $("#o").click(function () {
        console.log("usrer is o");
        player = 'O';
        computer = 'X';
    });


    // $(".cell").click(function () {
    //     if ($(this).text().trim() !== "") {
    //         alert("Go somewhere else!");
    //         return;
    //     }
    //     // debugger;
    //     if (step % 2 == 0) {
    //         // if ((step % 2) == 1) {
    //         $(this).append(player);
    //     }
    //     else { $(this).append(computer); }
    //     step++;

    // });

    function cleartable() {
        C1 = $('#0').text('');
        C2 = $('#1').text('');
        C3 = $('#2').text('');
        C4 = $('#3').text('');
        C5 = $('#4').text('');
        C6 = $('#5').text('');
        C7 = $('#6').text('');
        C8 = $('#7').text('');
        C9 = $('#8').text('');
    }




    $("#replay").click(function () {
        cleartable();
    })

    function checkcell() {
        C1 = $("#0").html().trim();
        C2 = $("#1").html().trim();
        C3 = $("#2").html().trim();
        C4 = $("#3").html().trim();
        C5 = $("#4").html().trim();
        C6 = $("#5").html().trim();
        C7 = $("#6").html().trim();
        C8 = $("#7").html().trim();
        C9 = $("#8").html().trim();
    }

    function computermove() {

        if (C1 === '' && ((C2 === computer && C3 === computer) || (C4 === computer && C7 === computer) || (C5 === computer && C9 === computer))) {
            $('#0').text(computer);
            turn = 0;
        }
        else if (C2 === '' && ((C1 === computer && C3 === computer) || (C5 === computer && C8 === computer))) {
            $('#1').text(computer);
            turn = 0;
        }
        else if (C3 === '' && ((C1 === computer && C2 === computer) || (C6 === computer && C9 === computer) || (C5 === computer && C7 === computer))) {
            $('#2').text(computer);
            turn = 0;
        }
        else if (C4 === '' && ((C1 === computer && C7 === computer) || (C5 === computer && C6 === computer))) {
            $('#3').text(computer);
            turn = 0;
        }
        else if (C5 === '' && ((C4 === computer && C6 === computer) || (C1 === computer && C9 === computer) || (C3 === computer && C7 === computer))) {
            $('#4').text(computer);
            turn = 0;
        }
        else if (C6 === '' && ((C4 === computer && C5 === computer) || (C3 === computer && C9 === computer))) {
            $('#5').text(computer);
            turn = 0;
        }
        else if (C7 === '' && ((C8 === computer && C9 === computer) || (C1 === computer && C4 === computer) || (C3 === computer && C5 === computer))) {
            $('#6').text(computer);
            turn = 0;
        }
        else if (C8 === '' && ((C7 === computer && C9 === computer) || (C2 === computer && C5 === computer))) {
            $('#7').text(computer);
            turn = 0;
        }
        else if (C9 === '' && ((C7 === computer && C8 === computer) || (C3 === computer && C6 === computer) || (C1 === computer && C5 === computer))) {
            $('#8').text(computer);
            turn = 0;
        }
        // case 2: if there is a chance to block
        else if (C1 === "" && ((C2 === player && C3 === player) || (C4 === player && C7 === player) || (C5 === player && C9 === player))) {
            $("#0").text(computer);
            turn = 0;
        }
        else if (C2 === "" && ((C1 === player && C3 === player) || (C5 === player && C8 === player))) {
            $("#1").text(computer);
            turn = 0;
        }
        else if (C3 === "" && ((C1 === player && C2 === player) || (C6 === player && C9 === player) || (C5 === player && C7 === player))) {
            $("#2").text(computer);
            turn = 0;
        }
        else if (C4 === "" && ((C1 === player && C7 === player) || (C5 === player && C6 === player))) {
            $("#3").text(computer);
            turn = 0;
        }
        else if (C5 === "" && ((C4 === player && C6 === player) || (C1 === player && C9 === player) || (C3 === player && C7 === player))) {
            $("#4").text(computer);
            turn = 0;
        }
        else if (C6 === "" && ((C4 === player && C5 === player) || (C3 === player && C9 === player))) {
            $("#5").text(computer);
            turn = 0;
        }
        else if (C7 === "" && ((C8 === player && C9 === player) || (C1 === player && C4 === player) || (C3 === player && C5 === player))) {
            $("#6").text(computer);
            turn = 0;
        }
        else if (C8 === "" && ((C7 === player && C9 === player) || (C2 === player && C5 === player))) {
            $("#7").text(computer);
            turn = 0;
        }
        else if (C9 === "" && ((C7 === player && C8 === player) || (C3 === player && C6 === player || (C1 === player && C5 === player)))) {
            $("#8").text(computer);
            turn = 0;
        }
        // case 3: center
        else if (C5 === "") {
            $("#4").text(computer);
            turn = 0;
        }
        // case 4: opposite corner
        else if (C1 === "" && (C3 === player || C7 === player)) {
            $("#0").text(computer);
            turn = 0;
        }
        else if (C3 === "" && (C1 === player || C9 === player)) {
            $("#2").text(computer);
            turn = 0;
        }
        else if (C9 === "" && (C3 === player || C7 === player)) {
            $("#8").text(computer);
            turn = 0;
        }
        else if (C7 === "" && (C1 === player || C9 === player)) {
            $("#6").text(computer);
            turn = 0;
        }
        // case 5: corner
        else if (C1 === "") {
            $("#0").text(computer);
            turn = 0;
        }
        else if (C3 === "") {
            $("#c3").text(computer);
            turn = 0;
        }
        else if (C7 === "") {
            $("#6").text(computer);
            turn = 0;
        }
        else if (C9 === "") {
            $("#8").text(computer);
            turn = 0;
        }
        // case 6: empty side
        else if (C2 === "") {
            $("#1").text(computer);
            turn = 0;
        }
        else if (C6 === "") {
            $("#5").text(computer);
            turn = 0;
        }
        else if (C8 === "") {
            $("#7").text(computer);
            turn = 0;
        }
        else if (C4 === "") {
            $("#3").text(computer);
            turn = 0;
        }
    }






    function chickwin() {
        // win poition for player
        if ((C1 === C2 && C1 === C3 && (C1 === player)) ||
            (C4 === C5 && C4 === C6 && (C4 === player)) ||
            (C7 === C8 && C7 === C9 && (C7 === player)) ||
            (C1 === C4 && C1 === C7 && (C1 === player)) ||
            (C2 === C5 && C2 === C8 && (C2 === player)) ||
            (C3 === C6 && C3 === C9 && (C3 === player)) ||
            (C1 === C5 && C1 === C9 && (C1 === player)) ||
            (C3 === C5 && C3 === C7 && (C3 === player))
        ) {

            $('#winner').text('You win!');

        }
        // computer win poition
        else if ((C1 === C2 && C1 === C3 && (C1 === computer)) ||
            (C4 === C5 && C4 === C6 && (C4 === computer)) ||
            (C7 === C8 && C7 === C9 && (C7 === computer)) ||
            (C1 === C4 && C1 === C7 && (C1 === computer)) ||
            (C2 === C5 && C2 === C8 && (C2 === computer)) ||
            (C3 === C6 && C3 === C9 && (C3 === computer)) ||
            (C1 === C5 && C1 === C9 && (C1 === computer)) ||
            (C3 === C5 && C3 === C7 && (C3 === computer))
        ) {
            //   $('#board').hide();
            $('#winner').text('Art (artificial player) wins!');
            //   $('#finalScreen').fadeTo('slow', 1);
        }
        // poiition for no win
        else if (C1 && C2 && C3 && C4 && C5 && C6 && C7 && C8 && C9) {
            // $('#board').hide();
            $('#winner').text('Tie!');
            // $('#finalScreen').fadeTo('slow', 1);
        } // else nothing (no human win, no ai, no tie, game still on...)
    }

    $('.cell').click(function () {
        if (turn === 0) {
            // debugger;
            if ($(this).text().trim() === "") {
                $(this).text(player);
                checkcell();
                chickwin();
                turn = 1;
                computermove();
                checkcell();
                chickwin();
            }
        }
    });




});


