# PSU DataBase labs

 - [x]  [Лабораторная работа №1](https://pavelkeyzik.github.io/psu--db/lab_1/)
 - [x]  [Лабораторная работа №3](https://keyzik-lab-2.herokuapp.com/)
 - [x]  [Лабораторная работа №5](https://pavelkeyzik.github.io/psu--db/lab_3/)
 - [x]  [Лабораторная работа №6](https://github.com/pavelkeyzik/psu--db/tree/master/lab_6/)
 - [x]  [Лабораторная работа №6 (График)](https://pavelkeyzik.github.io/psu--db/graphic/)
 - [x]  [Лабораторная работа №7](https://github.com/pavelkeyzik/psu--db/tree/master/lab_7/)
 - [x]  Лабораторная работа №9 (Реализовано в курсовом проекте)
 - [x]  Лабораторная работа №11 (Реализовано в курсовом проекте)
 - [x]  Лабораторная работа №12 (Реализовано в курсовом проекте)

# Tables

## checkIns
|Field|Type|
|-|-|
|id|PRIMARY|
|checkInTime|DATE|
|userId|uuid `id (users)`|
|placeId|uuid `id (places)`|

## placeTypes
|Field|Type|
|-|-|
|id|PRIMARY|
|title|VARCHAR|

## places
|Field|Type|
|-|-|
|id|PRIMARY|
|title|VARCHAR|
|city|VARCHAR|
|address|VARCHAR|
|type|uuid `id (placeTypes)`|

## users
|Field|Type|
|-|-|
|id|PRIMARY|
|firstNameEng|VARCHAR|
|lastNameEng|VARCHAR|
|isAdmin|BOOLEAN|
