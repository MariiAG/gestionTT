import React, { useEffect } from "react";

const App = () => {

  const fetchDispach = async() => {
    const response = await fetch("http://127.0.0.1:5000//");
    const data = await response.json();
    console.log(data);
  }
  useEffect(()=>{
    fetchDispach()
  },[])

  return (
    <body>
        <header>
          <nav className="navegator">
          <div className="nav-wrapper black">
              <div id="list" className="col s12">
                <a href="" id="rpa"><i className="material-icons small left">polymer</i>RPA</a>
                <a href="../index.html" className="item">Centro de Aplicaciones</a>
                <a href="index.html" className="item">Gestión Despacho TT</a>
              </div>
          </div>
          <img className="materialboxed" src="Img/background1.jpg"></img>
          </nav>
        </header>
        <div id="body">
            <table className="responsive-table">
                    <tr>
                        <td>
                            <div className="input-field">
                            <input id="origin" type="text" className="validate" disabled></input>
                            <label className="lbl-tecnology" for="origin">Origen de la falla</label>
                            </div>
                            <div className="input-field">
                            <input id="tecnology" type="text" className="validate" disabled></input>
                            <label className="lbl-tecnology" for="tecnology">Tecnologia</label>
                            </div>
                            <div className="input-field">
                            <input id="systemOrigin" type="text" className="validate" disabled></input>
                            <label className="lbl-tecnology" for="systemOrigin">Sistema Origen</label>
                            </div>
                            <div className="input-field">
                            <input id="net" type="text" className="validate" disabled></input>
                            <label className="lbl-tecnology" for="net">Red</label>
                            </div>
                        </td>
                        <td>
                            <div className="input-field">
                            <input id="region" type="text" className="validate" disabled></input>
                            <label className="lbl-tecnology" for="region">Region</label>
                            </div>
                            <div className="input-field">
                            <input id="department" type="text" className="validate" disabled></input>
                            <label className="lbl-tecnology" for="department">Departamento</label>
                            </div>
                            <div className="input-field">
                            <input id="city" type="text" className="validate" disabled></input>
                            <label className="lbl-tecnology" for="city">Ciudad</label>
                            </div>
                            <div className="input-field">
                            <input id="dirNodo" type="text" className="validate" disabled></input>
                            <label className="lbl-tecnology" for="dirNodo">Direccion Nodo</label>
                            </div> 
                        </td>
                        <td>
                        <div className="input-field">
                            <input id="autowo" type="text" className="validate" disabled></input>
                            <label className="lbl-tecnology" for="autowo">Auto WO</label>
                            </div>
                            <div className="input-field">
                            <input id="snr" type="text" className="validate" disabled></input>
                            <label className="lbl-tecnology" for="snr">SNR</label>
                            <div className="input-field">
                            <input id="proveedor" type="text" className="validate" disabled></input>
                            <label className="lbl-tecnology" for="proveedor">Proveedor</label>
                            </div>
                            <div className="input-field">
                            <input id="group" type="text" className="validate" disabled></input>
                            <label className="lbl-tecnology" for="group">Grupo</label>
                            </div>
                            </div>
                        </td>
                        <td>
                            <div className="input-field">
                            <input id="georeferencing" type="text" className="validate" disabled></input>
                            <label className="lbl-tecnology" for="georeferencing">Georeferenciacion (HFC)</label>
                            </div>
                            <div className="input-field">
                            <input id="orderType" type="text" className="validate" disabled></input>
                            <label className="lbl-tecnology" for="orderType">Tipo de Orden</label>
                            </div>
                            <div className="row">
                                <div className="input-field col2">
                                    <select className="browser-default lbl-tecnology indigo-text text-darken-4">
                                        <option value="" disabled selected>Urgencia</option>
                                        <option value="1">Bajo</option>
                                        <option value="2">Alto</option>
                                        <option value="3">Medio</option>
                                        <option value="4">Inmediata</option>
                                    </select>
                                </div>
                                <div className="input-field col2">
                                    <select className="browser-default lbl-tecnology indigo-text text-darken-4">
                                        <option value="" disabled selected>Impacto</option>
                                        <option value="1">Ninguno</option>
                                        <option value="2">Bajo</option>
                                        <option value="3">Medio</option>
                                        <option value="4">Alto</option>
                                        <option value="5">Critico</option>
                                    </select>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="input-field">
                            <input id="originTT" type="text" className="validate blue-grey-text text-darken-2"></input>
                            <label className="lbl-tecnology indigo-text text-darken-4" for="originTT">Tiquete origen</label>
                            </div>
                            <div className="input-field">
                            <input id="categoryOWS" type="text" className="validate blue-grey-text text-darken-2"></input>
                            <label className="lbl-tecnology indigo-text text-darken-4" for="categoryOWS">Categoria OWS</label>
                            </div>
                            <div className="input-field">
                            <input id="subcategory" type="text" className="validate blue-grey-text text-darken-2"></input>
                            <label className="lbl-tecnology indigo-text text-darken-4" for="subcategory">Subcategoria</label>
                            </div>
                            <div className="input-field">
                            <input id="systemOrigin" type="text" className="validate blue-grey-text text-darken-2"></input>
                            <label className="lbl-tecnology indigo-text text-darken-4" for="systemOrigin">Sistema origen</label>
                            </div>
                        </td>
                        <td>
                            <div className="input-field">
                            <input id="faultSource" type="text" className="validate blue-grey-text text-darken-2"></input>
                            <label className="lbl-tecnology indigo-text text-darken-4" for="faultSource">Origen de la falla</label>
                            </div>
                            <div className="input-field">
                            <input id="net" type="text" className="validate blue-grey-text text-darken-2"></input>
                            <label className="lbl-tecnology indigo-text text-darken-4" for="net">Red</label>
                            </div>
                            <div className="input-field">
                            <input id="Siste" type="text" className="validate blue-grey-text text-darken-2"></input>
                            <label className="lbl-tecnology indigo-text text-darken-4" for="red">Sistema origen</label>
                            </div>
                        </td>
                    </tr>
            </table>
            <table className="responsive-table">
                <tr>
                    <td>
                      <form action="" id="td-form1">
                          <div className="col2">
                          <label>
                          <input  name="group1" type="radio" value="HFC"></input>
                          <span  id="span-hfc">HFC</span>
                          </label>
                          </div>
                          <div className="col2">
                          <label>
                          <input id="btn-snr" name="group1" type="radio"></input>
                          <span id="span-snr">SNR</span>
                          </label>
                          </div>
                          <div className="col2">
                          <label>
                          <input id="btn-fiber" name="group1" type="radio"></input>
                          <span id="span-fiber">Fibra Acceso</span>
                          </label>
                          </div>
                          <div className="col2">
                          <label>
                          <input id="btn-copper" name="group1" type="radio"></input>
                          <span id="span-copper">Cobre</span>
                          </label>
                          </div>
                          <div className="col2">
                          <label>
                          <input id="btn-client" name="group1" type="radio"></input>
                          <span id="span-client">Falla Cliente</span>
                          </label>
                          </div>
                      </form>
                    </td>
                    <td id="tdTec" className="indigo darken-4">    
                        <div className="row white-text">
                        <h1 id="span-tec" className="lbl-tecnology center">HFC</h1>
                        </div>
                    </td>
                    <td>
                        <div className="input-field">
                        <input id="red" type="text" className="validate" disabled></input>
                        <label className="lbl-tecnology indigo-text text-darken-4" for="red">CDI</label>
                        </div>
                        <div className="input-field">
                        <input id="red" type="text" className="validate blue-grey-text text-darken-2"></input>
                        <label className="lbl-tecnology indigo-text text-darken-4" for="red">NODO</label>
                        </div>
                    </td>
                    <td>
                        <div className="input-field">
                        <input id="red" type="text" className="validate blue-grey-text text-darken-2"></input>
                        <label className="lbl-tecnology indigo-text text-darken-4" for="red">AMP</label>
                        </div>
                        <div className="input-field">
                        <input id="red" type="text" className="validate blue-grey-text text-darken-2"></input>
                        <label className="lbl-tecnology indigo-text text-darken-4" for="red">TAP</label>
                        </div>
                    </td>
                    <td></td>
                    <td>
                        <p className="lbl-tecnology">Tipo de Falla</p>
                        <div className="col2">
                        <label>
                        <input id="btn-fiber" name="group2" type="radio"></input>
                        <span id="span-fiber">Caida Total</span>
                        </label>
                        </div>
                        <div className="col2">
                        <label>
                        <input id="btn-copper" name="group2" type="radio"></input>
                        <span id="span-copper">Caida parcial</span>
                        </label>
                        </div>
                        <div className="col2">
                        <label>
                        <input id="btn-client" name="group2" type="radio"></input>
                        <span id="span-client">Alarma</span>
                        </label>
                        </div>
                    </td>
                </tr>
            </table>
            <table className="responsive-table">
                <tr>
                    <td>
                        <h6 className="lbl-tecnology indigo-text text-darken-4">Descripcion</h6>
                        <textarea id="textarea" name="comment"react maxlength="65525" required="required"></textarea>
                    </td>
                    <td>
                        <div>
                          <button id="btn-update" className="lbl-tecnology btn waves-effect waves-light light-blue right" type="submit" name="action">Actualizar
                          <i className="material-icons right">autorenew</i>
                          </button>
                        </div>
                          <div>
                          <button id="btn-clean" className="lbl-tecnology btn waves-effect waves-light red right" type="submit" name="action">Limpiar
                          <i className="material-icons right">backspace</i>
                          </button>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
      </body>
  );
}

export default App;
