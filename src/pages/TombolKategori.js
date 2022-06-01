import react from "react";
import style from './TombolKategorimodule.scss';

const TombolKategori = () =>{

return (
    <div className="dropdown"> {/* pake curly brackets */} 
    <button className="buttonKategori">kategori</button>
    <div className="dropdown-content">
      <button>Kue dan katering</button>
      <button>Pawang Hujan</button>
      <button>Flowers dan Gift</button>
      <button>Desain undangan</button>
      <button>Wedding Organizer</button>
      <button>Dresses</button>
      <button>Venue</button>
    </div>
  </div>
    )
};

export default TombolKategori;
    
