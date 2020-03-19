import { Component, OnInit } from '@angular/core';
import { AngularFireStorageReference, AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { Imagem } from '../class/imagem';
import { Observable } from 'rxjs';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  ref : AngularFireStorageReference
  task: AngularFireUploadTask
  
  imagem: Imagem

  imagens : Observable<any>;
  
  url: string
  key: string
  nome: string

  constructor(private imageService : ImageService, private  afStorage: AngularFireStorage) { }

  ngOnInit() {
  }

  enviarImg(evento){

    var file = evento.target.files[0]
    this.imagem = new Imagem()
    this.imagem.nome = file.name
    this.imagem.tamanho = file.size
    const id = file.name
    this.ref = this.afStorage.ref('imagens/'+id);
    this.task = this.ref.put(evento.target.files[0])
    this.task.then(a => {
      this.ref.getDownloadURL().subscribe((url) => {
        this.imagem.url = url
        this.imageService.insert(this.imagem)
      })  
    })
  }


}
