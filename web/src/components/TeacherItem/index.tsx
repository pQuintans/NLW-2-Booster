import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://instagram.fcpq3-1.fna.fbcdn.net/v/t51.2885-19/s320x320/79387249_465469637506451_5419326142807015424_n.jpg?_nc_ht=instagram.fcpq3-1.fna.fbcdn.net&_nc_ohc=HgSk_9fjLYgAX_0SOPW&oh=cc3fcb0bae6ccb0c4229252f09ed857a&oe=5F52444D" alt="Pedro Quintans" />
        <div>
          <strong>Pedro Quintans</strong>
          <span>Video Game kk</span>
        </div>
      </header>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem dolor laborum corporis quae odio, dignissimos quibusdam aut quod quo.
        <br/><br/>
        consectetur iusto! Dicta rerum fugit laudantium ea pariatur deleniti et dignissimos.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;