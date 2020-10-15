import React from 'react'
import { Link } from 'react-router-dom'

import {FiPlus} from 'react-icons/fi'
import mapMarkerImg from '../images/mapMarker.svg'

import '../styles/pages/orphanages-map.css'

import { Map, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function OrphanagesMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Marker"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita!</p>
                </header>

                <footer>
                    <strong>Montenegro</strong>
                    <span>Rio Grande do Sul</span>
                </footer>
            </aside>
            <Map 
                center={[-29.617817,-51.4203282]}
                zoom={12}
                style={{width: '100%', height: '100%'}}
            >
                <TileLayer 
                    url={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_TOKEN}`}
                />
            </Map>
            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    )
}

export default OrphanagesMap