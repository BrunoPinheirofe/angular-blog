import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input()
  photoCover:string = 'https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,q_60,w_645/2ff1c801c5d62f35fc01ec5e0ab18267.jpg'
  @Input()
  contentTitle:string = 'NOVO HOMEM ARANHA ANUNCIADO'
  @Input()
  contentDescriptio:string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quas consequuntur est illum placeat minima! Dolorum earum tempora minima quasi minus voluptate molestiae ea voluptas, odit totam facere veniam optio'
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )

    this.setValuesTocomponent(this.id)
  }

  setValuesTocomponent(id:string|null){
    const result = dataFake.filter(article => article.id == id)[0]

    this.contentTitle = result.title
    this.contentDescriptio = result.descripition
    this.photoCover = result.photoCover

  }

}
