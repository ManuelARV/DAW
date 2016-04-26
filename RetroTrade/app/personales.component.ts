import {Component,OnInit} from 'angular2/core';
import {usuario} from './class';
import {UsuarioService} from './usuario.service';

@Component({
  selector: 'datos',
  template: `
  <div class="container well" *ngFor="#usuario of usuario">
              <div class="row" >
                  <div class="col-xs-12"><h2>Datos Personales</h2></div>
              </div><form class="form-horizontal">



                  <div class="form-group">
                      <label class="col-sm-2 control-label" for="formGroup">Nombre de Usuario</label>
                      <div class="col-sm-2">
                          <input class="form-control" type="text" id="formGoup" value="{{usuario.user}}" disabled>
                      </div>
                  </div>

                  <div class="form-group">
                      <label class="col-sm-2 control-label" for="formGroup">Nombre</label>
  					    <div class="col-sm-4">
  					          <input class="form-control" type="text" id="formGroup" placeholder="{{usuario.nombre}}">
  					    </div>
                    </div>

                    <div class="form-group">
  					    <label class="col-sm-2 control-label" for="formGroup">Apellidos</label>
  					    <div class="col-sm-4">
  					      <input class="form-control" type="text" id="formGroup" placeholder="{{usuario.apellidos}}">
  					    </div>
                    </div>

                    <div class="form-group">
  					    <label class="col-sm-2 control-label" for="formGroup" id="tel">Teléfono</label>

  					    <div class="input-group col-sm-3">
  					      <span class="input-group-addon"><span class="glyphicon glyphicon-phone"></span></span>
  					      <input class="form-control" type="text" id="formGroup" placeholder="{{usuario.telefono}}">

  					    </div>
                    </div>

                    <div class="form-group">
  					    <label class="col-sm-2 control-label" for="formGroup" id="tel">Correo electrónico</label>
  					    <div class="input-group col-sm-3">
  					      <span class="input-group-addon">@</span>
  					      <input class="form-control" type="text" id="formGroup" placeholder="{{usuario.correo}}">

                          </div>
                    </div>

                    <div class="form-group">
  					    <label class="col-sm-2 control-label" for="formGroup">Provincia</label>
  					    <div class="col-sm-4">

  					      <select class="form-control">
  					        <option value='0'>({{usuario.provincia}})</option>
                              <option value='2'>Álava</option>
                              <option value='3'>Albacete</option>
                              <option value='4'>Alicante/Alacant</option>
                              <option value='5'>Almería</option>
                              <option value='6'>Asturias</option>
                              <option value='7'>Ávila</option>
                              <option value='8'>Badajoz</option>
                              <option value='9'>Barcelona</option>
                              <option value='10'>Burgos</option>
                              <option value='11'>Cáceres</option>
                              <option value='12'>Cádiz</option>
                              <option value='13'>Cantabria</option>
                              <option value='14'>Castellón/Castelló</option>
                              <option value='15'>Ceuta</option>
                              <option value='16'>Ciudad Real</option>
                              <option value='17'>Córdoba</option>
                              <option value='18'>Cuenca</option>
                              <option value='19'>Girona</option>
                              <option value='20'>Las Palmas</option>
                              <option value='21'>Granada</option>
                              <option value='22'>Guadalajara</option>
                              <option value='23'>Guipúzcoa</option>
                              <option value='24'>Huelva</option>
                              <option value='25'>Huesca</option>
                              <option value='26'>Illes Balears</option>
                              <option value='27'>Jaén</option>
                              <option value='28'>A Coruña</option>
                              <option value='29'>La Rioja</option>
                              <option value='30'>León</option>
                              <option value='31'>Lleida</option>
                              <option value='32'>Lugo</option>
                              <option value='33'>Madrid</option>
                              <option value='34'>Málaga</option>
                              <option value='35'>Melilla</option>
                              <option value='36'>Murcia</option>
                              <option value='37'>Navarra</option>
                              <option value='38'>Ourense</option>
                              <option value='39'>Palencia</option>
                              <option value='40'>Pontevedra</option>
                              <option value='41'>Salamanca</option>
                              <option value='42'>Segovia</option>
                              <option value='43'>Sevilla</option>
                              <option value='44'>Soria</option>
                              <option value='45'>Tarragona</option>
                              <option value='46'>Santa Cruz de Tenerife</option>
                              <option value='47'>Teruel</option>
                              <option value='48'>Toledo</option>
                              <option value='49'>Valencia/Valéncia</option>
                              <option value='50'>Valladolid</option>
                              <option value='51'>Vizcaya</option>
                              <option value='52'>Zamora</option>
                              <option value='53'>Zaragoza</option>
  					      </select>

  					    </div>
                    </div>

                    <div class="form-group">
                          <label class="col-sm-2 control-label" for="formGroup">Ciudad</label>
  					    <div class="col-sm-4">
  					          <input class="form-control" type="text" id="formGroup" placeholder="{{usuario.ciudad}}">
  					    </div>
                    </div>

                  <div class="form-group">
                          <label class="col-sm-2 control-label" for="formGroup">Código postal</label>
  					    <div class="col-sm-4">
  					          <input class="form-control" type="text" id="formGroup" placeholder="{{usuario.codigo}}" >
  					    </div>
                    </div>

                   <div class="form-group">
  					    <label class="col-sm-2 control-label" for="formGroup">Privacidad</label>
  					    <div class="col-sm-5">

  							<label class="checkbox-inline">
  							  <input type="checkbox" id="inlineCheckbox1" value="option1" > Nombre
  							</label>
  							<label class="checkbox-inline">
  							  <input type="checkbox" id="inlineCheckbox2" value="option2"> Teléfono
  							</label>
  							<label class="checkbox-inline">
  							  <input type="checkbox" id="inlineCheckbox3" value="option3"> Correo
  							</label>

  					    </div>
  					  </div>

  				    <br/>

  				    <div class="form-group">
  					    <label class="col-sm-2 control-label" for="formGroup"></label>
  					    <div class="col-sm-5">

  							<button type="submit" class="btn btn-success btn-lg"><span class="glyphicon glyphicon-ok-sign"></span> Guardar</button>

  							<button type="button" class="btn btn-danger btn-lg"><span class="glyphicon glyphicon-remove-circle"></span> Cancelar</button>


  					    </div>
  					  </div>

              </form>

          </div>
   `,
   providers: [UsuarioService]
})

  export class PersonalesComponent{
    usuario: usuario[];
    constructor ( private UsuarioService:UsuarioService){}
    getUsuario() {
        this.UsuarioService.getUsuario(2).then(usuario => this.usuario = usuario);
      }
    ngOnInit (){
      this.getUsuario();
  }

  }
