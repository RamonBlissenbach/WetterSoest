<!DOCTYPE html>
<html lang="de" dir="ltr">
    <head>
        <title>Wetter Soest | Home</title>
        <meta charset="UTF8">
        <link rel="stylesheet" href="main.css">
        <script src="main.js">

        </script>
    </head>
    <body>
        <a href="Datenschutzerklaerung.php" style="float: right">Datenschutz</a>
        <div id="CapContainer">
            <div id="CaptionBan" class="boxstyle">
                <div id="Caption">Wetterdaten einsehen</div>
            </div>
        </div>

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
            <form id="searchContainer" action="suche.php" method="GET">
                <input class="boxstyle" id="SearchBar" name="date" type="search" placeholder="Datum eingeben...">
                <input class="boxstyle" id="SearchSubmit" type="submit" value=" " placeholder="HII">
            </form>




        <?php
                $searchDate = @$_GET["date"];

                $urlContent = @file_get_contents('http://localhost:44217/api/v1/dailyData?date=' . $searchDate );
                $decode = @json_decode($urlContent, 1, 512,  0);
                $temp = @number_format($decode["temperature"], 1, ',', '.');
                $pressure = @number_format($decode["pressure"] / 1000, 1, ',', '.');
                $humidity = @number_format($decode["humidity"], 1, ',', '.');
                $rain = @number_format($decode["precipitation"], 1, ',', '.');
                $bright = @number_format($decode["lux"], 1, ',', '.');
                $uv = @number_format($decode["uv"], 1, ',', '.');

                $uvT = @number_format($decode["uv"], 0, ',', '.');

    if($uvT == 0) {
        echo "";
    }
    else {
        echo '<div id="ResContainer">
            <div id="ResBox" class="boxstyle">
                <div id="Res" class="boxstyle">
                    <h2 id="DateCap">'. $searchDate .'</h2>
                    <ul id="DateValues">
                        <li>Temperatur: ' . $temp . ' °</li>
                        <li>Luftdruck: ' . $pressure . ' bar</li>
                        <li>Luftfeuchtigkeit: ' . $humidity . ' %</li>
                        <li>Niederschlag: ' . $rain . 'ml</li>
                        <li>Helligkeit: ' . $bright . 'lux</li>
                        <li>UV-Eintrahlung: ' . $uv . '</li>
                    </ul>
                </div>
            </div>
        </div>';
    }


        ?>
    </body>
</html>
