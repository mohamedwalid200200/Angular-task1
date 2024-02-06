import { Component } from '@angular/core';
interface Products{
  imgPath:string;
  pDesc:string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  productCards:Products[]=[
    {imgPath:"../../assets/images/1.jpg",
    pDesc:"This is the best product in the shop"
    },
    {imgPath:"../../assets/images/download2.jpg",
    pDesc:"This is the best product in the shop"
    },
    {imgPath:"../../assets/images/download3.jpg",
    pDesc:"This is the best product in the shop"
    },
    {imgPath:"../../assets/images/download4.jpg",
    pDesc:"This is the best product in the shop"
    },
    {imgPath:"../../assets/images/download5.jpg",
    pDesc:"This is the best product in the shop"
    },
    {imgPath:"../../assets/images/download6.jpg",
    pDesc:"This is the best product in the shop"
    },
    {imgPath:"../../assets/images/download7.jpg",
    pDesc:"This is the best product in the shop"
    },
    {imgPath:"../../assets/images/download8.jpg",
    pDesc:"This is the best product in the shop"
    },
    {imgPath:"../../assets/images/download9.jpg",
    pDesc:"This is the best product in the shop"
    },
    {imgPath:"../../assets/images/download10.jpg",
    pDesc:"This is the best product in the shop"
    },
    {imgPath:"../../assets/images/images11.jpg",
    pDesc:"This is the best product in the shop"
    },
    {imgPath:"../../assets/images/images12.jpg",
    pDesc:"This is the best product in the shop"
    },
    {imgPath:"../../assets/images/images13.jpg",
    pDesc:"This is the best product in the shop"
    },
    {imgPath:"../../assets/images/images14.jpg",
    pDesc:"This is the best product in the shop"
    },
    {imgPath:"../../assets/images/images15.jpg",
    pDesc:"This is the best product in the shop"
    },
    {imgPath:"../../assets/images/images16.jpg",
    pDesc:"This is the best product in the shop"
    },
    {imgPath:"../../assets/images/images17.jpg",
    pDesc:"This is the best product in the shop"
    },
    {imgPath:"../../assets/images/images18.jpg",
    pDesc:"This is the best product in the shop"
    },
    {imgPath:"../../assets/images/images19.jpg",
    pDesc:"This is the best product in the shop"
    },
    {imgPath:"../../assets/images/images20.jpg",
    pDesc:"This is the best product in the shop"
    }
  ]
  
}
