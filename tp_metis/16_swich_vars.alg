<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description courant="a PREND_LA_VALEUR temp" texte=""/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2lignes="" F2defaut="" F2para="" F2etat="inactif"/>
    <repere repetat="inactif" repcode="-10#10#-10#10#2#2"/>
    <param nbDecimales="8" epaisseurLigne="2" epaisseurPoint="2" maxBoucle="500000" totalAffichages="1000" arrondiAuto="vrai" totalBoucles="5000000"/>
    <item algoitem="FONCTIONS_UTILISEES" code="200#declarationfonctions"/>
    <item algoitem="VARIABLES" code="100#declarationsvariables">
        <item algoitem="a EST_DU_TYPE NOMBRE" code="1#NOMBRE#a"/>
        <item algoitem="b EST_DU_TYPE NOMBRE" code="1#NOMBRE#b"/>
        <item algoitem="temp EST_DU_TYPE NOMBRE" code="1#NOMBRE#temp"/>
    </item>
    <item algoitem="DEBUT_ALGORITHME" code="101#debutalgo">
        <item algoitem="a PREND_LA_VALEUR 12" code="5#a#12#pasliste"/>
        <item algoitem="b PREND_LA_VALEUR 13" code="5#b#13#pasliste"/>
        <item algoitem="temp PREND_LA_VALEUR b" code="5#temp#b#pasliste"/>
        <item algoitem="b PREND_LA_VALEUR a" code="5#b#a#pasliste"/>
        <item algoitem="a PREND_LA_VALEUR temp" code="5#a#temp#pasliste"/>
    </item>
    <item algoitem="FIN_ALGORITHME" code="102#finalgo"/>
</Algo>
