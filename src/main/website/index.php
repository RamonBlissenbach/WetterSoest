<!DOCTYPE html>
<html lang="de" dir="ltr">
    <head>
        <title>Wetter Soest | Home</title>
        <meta charset="UTF8">
        <link rel="stylesheet" href="main.css">
        <script src="main.js"></script>
    </head>
    <body>
        <a href="Datenschutzerklaerung.php" style="float: right">Datenschutz</a>
        <div id="CapContainer">
            <div id="CaptionBan" class="boxstyle">
                <div id="Caption">Wilkommen auf Wetter-Soest.de</div>
            </div>
        </div>

        <?php
                $searchDate = @$_GET["date"];

                $urlContent = @file_get_contents('http://localhost:44217/api/v1/globalData');
                $decode = @json_decode($urlContent, 1, 512,  0);
                $temp = @number_format($decode["temperature"], 1, ',', '.');
                $pressure = @number_format($decode["pressure"] / 1000, 1, ',', '.');
                $humidity = @number_format($decode["humidity"], 1, ',', '.');
                $rain = @number_format($decode["precipitation"], 1, ',', '.');
                $bright = @number_format($decode["lux"], 1, ',', '.');
                $uv = @number_format($decode["uv"], 1, ',', '.');

                $uvT = @number_format($decode["uv"], 0, ',', '.');

                $timestamp = time();
                $datum = date("d.m.Y - H:i", $timestamp);

        ?>


        <div id="OpenMenue" onclick="OpenMen()">
        </div>
        <ul id="Menue" class="boxstyle">
            <li class="MenItem">
                <a href="index.php">Home</a>
            </li>
            <hr class="cutline">
            <li class="MenItem">
                <a href="suche.php">Wetter</a>
            </li>
            <hr class="cutline">
            <li class="MenItem" >
                <a href="Credits.php">Credits</a>
            </li>
            <hr class="cutline">
            <li class="MenItem" id="DarkmodeBtn" onclick="DarkOn()">
                    Darkmode: Aus
            </li>
        </ul>
        <br>
        <div id="QuickContainer">
        <table class="boxstyle" id="QuickOverview">
            <tr class="QuickTableDayZ">
                <th class="QuickTableDayIco">
                    Heute:
                </th>
                <th class="QuickTableDayIco">
                    <?php echo $datum . " Uhr"; ?>
                </th>
            </tr>
            <tr class="QuickTableDayZ">
                <th class="QuickTableDayIco">
                    Wetter
                </th>
                <th class="QuickTableDayIco">
                    <?php echo "Temperatur: ". $temp."°"; ?><br><?php echo "Niederschlag: " .$rain. " ml"; ?><br><?php echo "Luftfeuchtigkeit: ". $humidity."%"; ?>
                </th>
            </tr>
        </table>
        </div>
        <div  id="DailyAdvise">
            <div class="boxstyle" id="Advises">
                <ul id="AdviseList">
                <li clas="AdviseBox">
                    <?php
                        if((float)$temp > 27){
                            echo "Heute ist es ziemlich heiß, pass auf das du keinen Hitzseschlag bekommst!";
                        }
                        else if((float)$temp < 5){
                            echo "Heute ist es ziemlich Kalt, denk an deine Jacke!";
                        }
                        else{
                            echo "-";
                        }
                    ?>
                </li>
                <br>
                <li clas="AdviseBox">
                    <?php
                        if($rain > 40){
                            echo "Achtung! Es regnet ziemlich stark!";
                        }
                        else {
                            echo "-";
                        }
                    ?>
                </li>
                <br>
            </ul>
            </div>
            <div class="boxstyle" id="Karte">
                Comming soon...
            </div>
        </div>
        <script>
            function EasterEgg() {
                window.alert("Du hast mich gefunden. \n Dafür bekommst du einen Keks ー═┻┳︻▄ξ(✿ ❛‿❛)ξ▄︻┻┳═一 \n ↜(╰ •ω•)╯ ");
            }
        </script>
        <p id="Ostern" onclick="EasterEgg()">Klick mich :)</p>

    </body>
</html>
