import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';
import { House } from '../interfaces/location.interface';
import { LocationSearchForm } from '../interfaces/location.searsh.form.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  public houseListe$: BehaviorSubject<House[]> = new BehaviorSubject( [ 
    {
      libelle: 'aliotp',
      title: "andre moro",
      maxPerson: 3,
      room: 3,
      minPrice: 300,
      description: "",
      streetNumber: 3,
      street: "pablo picasso",
      additionalAdress: "",
      city: "corbil esson",
      postalCode: 91100,
      country: "France",
      image: "https://www.chaletdejardin.fr/media/cache/sylius_shop_product_hero_webp/f/9/4/4/f9446b318d99877d5994cfbfdf06da1ebdfeee8d_AV355_breta_18_img01.jpg"
    }
  ]);
  public house$: BehaviorSubject<House[]> = new BehaviorSubject(
    [ 
    {
      libelle: 'aliotp',
      title: "andre moro",
      maxPerson: 3,
      room: 3,
      minPrice: 300,
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil consectetur distinctio laudantium nesciunt fugiat molestiae libero aliquam voluptatibus eveniet hic, nam ratione laborum quia soluta culpa repudiandae, fugit tempora nemo?",
      streetNumber: 3,
      street: "pablo picasso",
      additionalAdress: "",
      city: "corbil esson",
      postalCode: 91100,
      country: "France",
      image: "https://www.chaletdejardin.fr/media/cache/sylius_shop_product_hero_webp/f/9/4/4/f9446b318d99877d5994cfbfdf06da1ebdfeee8d_AV355_breta_18_img01.jpg"
    },
    {
      libelle: "ndako",
      title: "maison congolaise",
      maxPerson: 5,
      room: 2,
      minPrice: 100,
      description: "",
      streetNumber: 2,
      street: "Paul verlaine",
      additionalAdress: "",
      city: "villeneuve saint georges",
      postalCode: 93100,
      country: "France",
      image: "https://www.chaletdejardin.fr/media/cache/sylius_shop_product_hero_webp/f/9/4/4/f9446b318d99877d5994cfbfdf06da1ebdfeee8d_AV355_breta_18_img01.jpg"
    },
    {
      libelle: "cabanette",
      title: "maison C",
      maxPerson: 5,
      room: 2,
      minPrice: 100,
      description: "",
      streetNumber: 2,
      street: "Paul verlaine",
      additionalAdress: "",
      city: "villeneuve saint georges",
      postalCode: 93100,
      country: "France",
      image: "../../assets/images/bg8.jpg"
    },
    {
      libelle: "roulotte",
      title: "maison D",
      maxPerson: 1,
      room: 1,
      minPrice: 50,
      description: "",
      streetNumber: 1,
      street: "bois du bray",
      additionalAdress: "",
      city: "Lieu saint",
      postalCode: 77100,
      country: "France",
      image: "../../assets/images/bg12.jpg"    },
    {
      libelle: "contenair",
      title: "maison G",
      maxPerson: 4,
      room: 4,
      minPrice: 50,
      description: "",
      streetNumber: 3,
      street: "beit sira",
      additionalAdress: "",
      city: "Montreuil",
      postalCode: 93100,
      country: "France",
      image: "../../assets/images/bg13.jpg"    },
    {
      libelle: "citrouille",
      title: "maison G",
      maxPerson: 4,
      room: 4,
      minPrice: 150,
      description: "",
      streetNumber: 3,
      street: "espace lacheau",
      additionalAdress: "",
      city: "gagny",
      postalCode: 93300,
      country: "France",
      image: "../../assets/images/bg11.jpg"    },
   /* {
      libelle: "hute",
      title: "maison O",
      maxPerson: 3,
      room: 3,
      minPrice: 150,
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil consectetur distinctio laudantium nesciunt fugiat molestiae libero aliquam voluptatibus eveniet hic, nam ratione laborum quia soluta culpa repudiandae, fugit tempora nemo?",
      streetNumber: 3,
      street: "espace lacheau",
      additionalAdress: "",
      city: "gagny",
      postalCode: 93300,
      country: "France",
      image: "https://www.chaletdejardin.fr/media/cache/sylius_shop_product_hero_webp/f/9/4/4/f9446b318d99877d5994cfbfdf06da1ebdfeee8d_AV355_breta_18_img01.jpg"
    },*/

  ]
  );

  constructor(private httpClient: HttpClient) {}

  // public slelctedLocation$: BehaviorSubject<Location> = new BehaviorSubject(
  //   // this.locations$.value[0]
  // );

  // get searsh location
  public getSearchLocation(data:LocationSearchForm){
  //  console.log(data)
   return of([ {
    libelle: "hute",
    title: "maison O",
    maxPerson: 3,
    room: 3,
    minPrice: 150,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil consectetur distinctio laudantium nesciunt fugiat molestiae libero aliquam voluptatibus eveniet hic, nam ratione laborum quia soluta culpa repudiandae, fugit tempora nemo?",
    streetNumber: 3,
    street: "espace lacheau",
    additionalAdress: "",
    city: "gagny",
    postalCode: 93300,
    country: "France",
    image: "https://www.chaletdejardin.fr/media/cache/sylius_shop_product_hero_webp/f/9/4/4/f9446b318d99877d5994cfbfdf06da1ebdfeee8d_AV355_breta_18_img01.jpg"
  },])

  // return[]
  }

  public getLocations(): Observable<House[]>{
    return this.httpClient.get<House[]>('GET_LOCATION_URL')
    .pipe(
      tap((houses:House[]) =>{
          this.houseListe$.next(houses);
        }
        )
    );  
  }

  public addLocavation(house:House):Observable<House>{
    return this.httpClient.post<House>('ADD_LOCATION_URL',house).pipe(
      tap((savedhouse: House)=> {
        const value = this.houseListe$.value;
        this.house$.next([...value, savedhouse]);
      })
    )
  }

  public editLocation(locationId:String, editedHouse: House): Observable<House>{
    return this.httpClient.patch<House>('PATCH_LOCATION_URL${locationId}',editedHouse)
    .pipe(
      tap( (savedHouse: House)=>{
            const value = this.houseListe$.value;
            this.houseListe$.next(
              value.map((house: House) => {
                if (house.title === savedHouse.title){ return savedHouse;}
                else{ return house;}
              })
            );
        })
    );
  }

  
  

  public getLocation(data:[]){
    //  console.log(data)
    //  return 
    }

}
