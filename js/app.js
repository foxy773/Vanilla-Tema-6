const people = [{
    "id": 1,
    "first_name": "Shea",
    "last_name": "Egdal",
    "gender": "Bigender",
    "email": "segdal0@sphinn.com",
    "avatar": "https://robohash.org/rationeexrerum.png?size=50x50&set=set2"
  }, {
    "id": 2,
    "first_name": "Miof mela",
    "last_name": "Crowhurst",
    "gender": "Female",
    "email": "mcrowhurst1@ed.gov",
    "avatar": "https://robohash.org/sedestipsum.png?size=50x50&set=set2"
  }, {
    "id": 3,
    "first_name": "Vittorio",
    "last_name": "Dand",
    "gender": "Male",
    "email": "vdand2@china.com.cn",
    "avatar": "https://robohash.org/rerumofficiissunt.png?size=50x50&set=set2"
  }, {
    "id": 4,
    "first_name": "Benita",
    "last_name": "Fenix",
    "gender": "Male",
    "email": "bfenix3@huffingtonpost.com",
    "avatar": "https://robohash.org/voluptaseaqueenim.png?size=50x50&set=set2"
  }, {
    "id": 5,
    "first_name": "Codie",
    "last_name": "Gidley",
    "gender": "Female",
    "email": "cgidley4@ifeng.com",
    "avatar": "https://robohash.org/omnisquiasapiente.png?size=50x50&set=set2"
  }, {
    "id": 6,
    "first_name": "Davin",
    "last_name": "Orum",
    "gender": "Female",
    "email": "dorum5@ustream.tv",
    "avatar": "https://robohash.org/dolorsedsoluta.png?size=50x50&set=set2"
  }, {
    "id": 7,
    "first_name": "Coletta",
    "last_name": "D'Onisi",
    "gender": "Male",
    "email": "cdonisi6@europa.eu",
    "avatar": "https://robohash.org/consequaturveniamsit.png?size=50x50&set=set2"
  }, {
    "id": 8,
    "first_name": "Harrie",
    "last_name": "Guirard",
    "gender": "Male",
    "email": "hguirard7@moonfruit.com",
    "avatar": "https://robohash.org/sitaliquamaperiam.png?size=50x50&set=set2"
  }, {
    "id": 9,
    "first_name": "Killie",
    "last_name": "Nertney",
    "gender": "Female",
    "email": "knertney8@merriam-webster.com",
    "avatar": "https://robohash.org/ducimusvelqui.png?size=50x50&set=set2"
  }, {
    "id": 10,
    "first_name": "Delores",
    "last_name": "Padly",
    "gender": "Genderfluid",
    "email": "dpadly9@pen.io",
    "avatar": "https://robohash.org/quiaipsamminus.png?size=50x50&set=set2"
  }, {
    "id": 11,
    "first_name": "Nari",
    "last_name": "Burkwood",
    "gender": "Female",
    "email": "nburkwooda@1und1.de",
    "avatar": "https://robohash.org/exdolorescupiditate.png?size=50x50&set=set2"
  }, {
    "id": 12,
    "first_name": "Antonia",
    "last_name": "Davidovic",
    "gender": "Female",
    "email": "adavidovicb@weibo.com",
    "avatar": "https://robohash.org/autsunteos.png?size=50x50&set=set2"
  }, {
    "id": 13,
    "first_name": "Sandy",
    "last_name": "Prestney",
    "gender": "Male",
    "email": "sprestneyc@networkadvertising.org",
    "avatar": "https://robohash.org/teneturatet.png?size=50x50&set=set2"
  }, {
    "id": 14,
    "first_name": "Arliene",
    "last_name": "Dibley",
    "gender": "Male",
    "email": "adibleyd@hao123.com",
    "avatar": "https://robohash.org/voluptateeumvitae.png?size=50x50&set=set2"
  }, {
    "id": 15,
    "first_name": "Jamill",
    "last_name": "Medina",
    "gender": "Female",
    "email": "jmedinae@usnews.com",
    "avatar": "https://robohash.org/quisquametconsequatur.png?size=50x50&set=set2"
  }, {
    "id": 16,
    "first_name": "Jerad",
    "last_name": "Allnutt",
    "gender": "Female",
    "email": "jallnuttf@state.gov",
    "avatar": "https://robohash.org/sedcupiditatereiciendis.png?size=50x50&set=set2"
  }, {
    "id": 17,
    "first_name": "Dalston",
    "last_name": "Brennand",
    "gender": "Female",
    "email": "dbrennandg@cbc.ca",
    "avatar": "https://robohash.org/commodimollitiaet.png?size=50x50&set=set2"
  }, {
    "id": 18,
    "first_name": "Maryanne",
    "last_name": "Woollhead",
    "gender": "Male",
    "email": "mwoollheadh@paginegialle.it",
    "avatar": "https://robohash.org/aliasrerummollitia.png?size=50x50&set=set2"
  }, {
    "id": 19,
    "first_name": "Maud",
    "last_name": "Randals",
    "gender": "Female",
    "email": "mrandalsi@taobao.com",
    "avatar": "https://robohash.org/molestiasrerumid.png?size=50x50&set=set2"
  }, {
    "id": 20,
    "first_name": "Florie",
    "last_name": "Tenbrug",
    "gender": "Female",
    "email": "ftenbrugj@facebook.com",
    "avatar": "https://robohash.org/nostrumarchitectobeatae.png?size=50x50&set=set2"
  }]

const SetUpList = function(people) {
    people.map((person) => {

        const peopleList = document.querySelector(".list")
        const peopleListItem = document.createElement("li")
        const peopleListName = document.createElement("p")
        const peopleListAvatar = document.createElement("img")

        peopleListName.innerHTML = person.first_name
        peopleListAvatar.src = person.avatar

        peopleList.appendChild(peopleListItem)
        peopleListItem.appendChild(peopleListName)
        peopleListItem.appendChild(peopleListAvatar)
    })
  }

  SetUpList(people)

  console.log(people)