# API Document

Document ...

## Search place by location

Description: `API allow call search place all service from facebook & google by api`

Method: `GET`

Subdomain: `api/searchplace/`

Input: e.g <http://locallhost:3000/api/searchplace?latitude=latitude&longitude=longitude&radius=number&types=gym,yoga>

````
```
  latitude : latitude,
  longitude: longitude,
  radius: <number: 500>
  types: <string: gym,yoga,.... > for n (or type: <string: gym > for one)
  // scope: <string: 123> [1 = GOOGLE 2 = FACEBOOK 3 = USERTYPE]

  ```
````

Output:

````
```
  GOOGLE

  {
"phone": "096 681 18 55",
"photos": [
  {
    "width": 960,
    "photo_reference": "CoQBdwAAAD8TcYuqP_6BTAWpT9EiSwso0bnL03mj_GQMvUxfr7lyxo70mIWH7-DGJcmXcQ0HU0HB59CqGx2La-sm25tAcCWIZeKXg78Y8LIRBsRWvt-8MIan4Xj6DxVZa2m0Fyf21anM_hvHYrs3Dj-9EKZwIJB8fEkeHHVt549Vq1o9Jh5KEhC8X5Dnr2xMuGkR12uGpZyhGhQccoQR2jKftcQqESoB9tQvyKmPfA",
    "html_attributions": [
      "<a href=\"https://maps.google.com/maps/contrib/102869619481969054596/photos\">Thể Hình X-Men</a>"
    ],
    "height": 720
  },
  {
    "width": 960,
    "photo_reference": "CoQBdwAAAD4QDkk3ZQ_aqd3f_Uv_ZyenXBD5Mpwt0dXT10u4enPFsLGjXpoet_4LvNJnlaqiQ_vDviYpFdhtoVHK_57Ac2w7FeReIpIwMl8UZtz0y2xyJHMQIgvMfcwwaX_s7R6vBnl4Ul0hjT-AX5ww7XVhqYZIrsnVWaF78hscGE0S9E4EEhDDhbJohb2f46A4Z044DjcWGhRguS8Fg-n9xBIe9oz44uWxn6pEMw",
    "html_attributions": [
      "<a href=\"https://maps.google.com/maps/contrib/102869619481969054596/photos\">Thể Hình X-Men</a>"
    ],
    "height": 720
  },
  {
    "width": 921,
    "photo_reference": "CoQBdwAAALSbJ8-dpdAQ8rI6hixiuah_dd44u1LcA4NHNH3HgnLWR88eb3Bxcz8fKYMNY5e5R-n-H-CFMLn5ByRSA3X_Sg9IXl0ZxLGHIJW4Mi2YEvaq9SWdLGJlJfRM-MdkytmDxiHHnUG5u9MKVW-vIIYQ2J3aoJNrZHmClmX6Dv4V1IKvEhAT2S4204WAsALk6vGCpe-EGhTf3GE3dmrgnEayPJG6xB2tupk_8Q",
    "html_attributions": [
      "<a href=\"https://maps.google.com/maps/contrib/102869619481969054596/photos\">Thể Hình X-Men</a>"
    ],
    "height": 693
  },
  {
    "width": 960,
    "photo_reference": "CoQBdwAAAGMSpkG0-BOQGonBfCAYNswrC2J_eYlJ_MbAxiyfmal78HNACxWizAYxnUTjpOsrH1eIbuWdp5esj7AEoaViU3jEd3o3cK0wQQn2af6p3Nw8KLO7vljb57Gp11sOXV5vTyWARZf9rxkAJbAs_zD7yIgh8NUa31o7pDVZpcb__yjREhCRh4FjDujB0YpyUel1A5uFGhSFD5CYU6uZzq7X4oShv1XAh0thjA",
    "html_attributions": [
      "<a href=\"https://maps.google.com/maps/contrib/115117281801581889735/photos\">Edward Nguyen</a>"
    ],
    "height": 720
  }
],
"types": [
  "gym",
  "health",
  "point_of_interest",
  "establishment"
],
"placeid": "ChIJQS8qaybRdDERO1NgVa8sjFs",
"scope": "GOOGLE",
"name": "Thể Hình X-Men",
"scopeid": "4a71648e6c42194b100b38c862e04ec98b8de6ba",
"_id": "58a670326531a30578708cfe",
"location": {
  "street": "102 Ba Mươi Tháng Tư, Phú Hòa, Tp. Thủ Dầu Một, Bình Dương, Vietnam",
  "longitude": "106.671677",
  "latitude": "10.977478"
}


FACEBOOK

{
    "fblink": "https://www.facebook.com/pages/Ph%C3%B2ng-T%E1%BA%ADp-Gym/401346513261123",
    "scope": "FACEBOOK",
    "name": "Phòng Tập Gym",
    "scopeid": "401346513261123",
    "_id": "58a670316531a30578708cf3",
    "location": {
      "city": "Thu Dau Mot",
      "country": "Vietnam",
      "latitude": "10.974991098057",
      "longitude": "106.67680499876"
    }
  }
````

}

````
```
````
