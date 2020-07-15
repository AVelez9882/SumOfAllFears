<script>

    var input = document.getElementById("sumInput");
            input.addEventListener("keyup", function (event) {
                if (event.keyCode === 13) {
        event.preventDefault();
                    document.getElementById("sumBtn").click();
                }
            });

			$("#soafOut").hide();

            $("#sumBtn").on("click", function () {
        let array = [10, 15, 3, 7];
                let k = parseInt($("#sumInput").val());
                let message = "";
                for (let index = 0; index < array.length - 1; index++) {
                    //If any number in the array is larger than K we can ignore it
                    if (array[index] > k)
                        continue;

                    let solution = k - array[index]; //if K = 17 and number = 7 we have to find 10

                    if (array.indexOf(solution, index + 1) > -1) {
        message = `A solution was found for a K value of ${k}.`;
                        break;
                    }
                    else {
        message = `No solution for a K value of ${k} was found`;
                    }
                }
                //Print result to user
                $("#soafOut").text(message);
                $("#soafOut").show();
            });

</script>

<script>
        var input = document.getElementById("soafIn5");
        input.addEventListener("keyup", function (event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                document.getElementById("altBtn").click();
            }
        });

		$("#altOut").hide();

        $("#altBtn").on("click", function () {

            //Step 1: Get the user data
            let k = parseInt($("#soafK").val());
            let num1 = parseInt($("#soafIn1").val());
            let num2 = parseInt($("#soafIn2").val());
            let num3 = parseInt($("#soafIn3").val());
            let num4 = parseInt($("#soafIn4").val());
            let num5 = parseInt($("#soafIn5").val());

            //Step 2: Create an array with the user info

            let array = [num1, num2, num3, num4, num5];

            //Step 3: Perform the algo

            let message = "";

            //for (number in array) {
            for (let index = 0; index < array.length - 1; index++) {
                //If any number in the array is larger than K we can ignore it
                if (array[index] > k)
                    continue;

                //
                let solution = k - array[index]; //if K = 17 and number = 7 we have to find 10

                if (array.indexOf(solution, index + 1) > -1) {
                    message = `A solution was found for a K value of ${k}`;
                    break;
                }
                else {
                    message = `No solution for a K value of ${k} was found`;
                }



            }

                //Step 4: Print result to user
                $("#altOut").text(message);
			    $("#altOut").show();
            });
</script>