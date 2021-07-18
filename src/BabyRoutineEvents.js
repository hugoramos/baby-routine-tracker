import React from 'react';

import './BabyRoutineEvents.css';
// import whitenoise from './assets/white_noise.mp3';
// import ninar1 from './assets/raul_ninar1.m4a';

import whitenoise1 from './assets/01_Strong_Hair_Dryer_-__Calms_Fussy_Babies.mp3';
import whitenoise2 from './assets/02_Fast_and_Vigorous_-_The_Best_Sound_for_the_Fussiest_Babies.mp3';
import whitenoise3 from './assets/03_Moderate_-_Gradually_Guides_Your_Baby_to_Calm.mp3';
import whitenoise4 from './assets/04_Mellow_-_Womb_Sounds_for_a_Full_Nights_Sleep.mp3';
import whitenoise5 from './assets/05_Hair_Dryer_-_Boosts_Sleep_for_Light_Sleepers.mp3';
import whitenoise6 from './assets/06_Rain_-_Peaceful_and_Soothing_for_Infants_and_Parents.mp3';
import whitenoise7 from './assets/07_Soft_Hair_Dryer_-_Unique__Ultra-Low_Pitch_for_Sensitive_Sleepers.mp3';
import whitenoise8 from './assets/08_Soft_Rain_-_Unique__Ultra-Low_Pitch_for_Sensitive_Sleepers.mp3';


const audioWhiteNoise1 = new Audio(whitenoise1);
const audioWhiteNoise2 = new Audio(whitenoise2);
const audioWhiteNoise3 = new Audio(whitenoise3);
const audioWhiteNoise4 = new Audio(whitenoise4);
const audioWhiteNoise5 = new Audio(whitenoise5);
const audioWhiteNoise6 = new Audio(whitenoise6);
const audioWhiteNoise7 = new Audio(whitenoise7);
const audioWhiteNoise8 = new Audio(whitenoise8);

export default class BabyRoutineEvent extends React.Component {

  constructor() {
    super();

    audioWhiteNoise1.loop = true;
    audioWhiteNoise2.loop = true;
    audioWhiteNoise3.loop = true;
    audioWhiteNoise4.loop = true;
    audioWhiteNoise5.loop = true;
    audioWhiteNoise6.loop = true;
    audioWhiteNoise7.loop = true;
    audioWhiteNoise8.loop = true;

    this.state = {
      events: [],
      loading: false,

      playingSoundName: '',

      playingwhitenoise1: false,
      playingwhitenoise2: false,
      playingwhitenoise3: false,
      playingwhitenoise4: false,
      playingwhitenoise5: false,
      playingwhitenoise6: false,
      playingwhitenoise7: false,
      playingwhitenoise8: false
    }

  }

  componentDidMount(prevProps) {
    this.UpdateHistory();
  }

  stopAll() {

    this.setState({
      playingwhitenoise1: false,
      playingwhitenoise2: false,
      playingwhitenoise3: false,
      playingwhitenoise4: false,
      playingwhitenoise5: false,
      playingwhitenoise6: false,
      playingwhitenoise7: false,
      playingwhitenoise8: false,
    });

    audioWhiteNoise1.pause();
    audioWhiteNoise2.pause();
    audioWhiteNoise3.pause();
    audioWhiteNoise4.pause();
    audioWhiteNoise5.pause();
    audioWhiteNoise6.pause();
    audioWhiteNoise7.pause();
    audioWhiteNoise8.pause();
  }

  playAudioWhitenoise1 = (audio) => {
    this.stopAll();

    this.setState({ playingwhitenoise1: !this.state.playingwhitenoise1, playingSoundName: '01 Strong Hair Dryer - Calms Fussy Babies' }, () => {
      if (this.state.playingwhitenoise1) {
        audioWhiteNoise1.play();
      }
      else {
        audioWhiteNoise1.pause();
      }
    })
  }

  playAudioWhitenoise2 = (audio) => {
    this.stopAll();

    this.setState({ playingwhitenoise2: !this.state.playingwhitenoise2, playingSoundName: '02 Fast and Vigorous - The Best Sound for the Fussiest Babies' }, () => {
      if (this.state.playingwhitenoise2) {
        audioWhiteNoise2.play();
      }
      else {
        audioWhiteNoise2.pause();
      }
    })
  }

  playAudioWhitenoise3 = (audio) => {
    this.stopAll();

    this.setState({ playingwhitenoise3: !this.state.playingwhitenoise3, playingSoundName: '03 Moderate - Gradually Guides Your Baby to Calm' }, () => {
      if (this.state.playingwhitenoise3) {
        audioWhiteNoise3.play();
      }
      else {
        audioWhiteNoise3.pause();
      }
    })
  }

  playAudioWhitenoise4 = (audio) => {
    this.stopAll();

    this.setState({ playingwhitenoise4: !this.state.playingwhitenoise4, playingSoundName: '04 Mellow - Womb Sounds for a Full Nights Sleep' }, () => {
      if (this.state.playingwhitenoise4) {
        audioWhiteNoise4.play();
      }
      else {
        audioWhiteNoise4.pause();
      }
    })
  }

  playAudioWhitenoise5 = (audio) => {
    this.stopAll();

    this.setState({ playingwhitenoise5: !this.state.playingwhitenoise5, playingSoundName: '05 Hair Dryer - Boosts Sleep for Light Sleepers' }, () => {
      if (this.state.playingwhitenoise5) {
        audioWhiteNoise5.play();
      }
      else {
        audioWhiteNoise5.pause();
      }
    })
  }

  playAudioWhitenoise6 = (audio) => {
    this.stopAll();

    this.setState({ playingwhitenoise6: !this.state.playingwhitenoise6, playingSoundName: '06 Rain - Peaceful and Soothing for Infants and Parents' }, () => {
      if (this.state.playingwhitenoise6) {
        audioWhiteNoise6.play();
      }
      else {
        audioWhiteNoise6.pause();
      }
    })
  }

  playAudioWhitenoise7 = (audio) => {
    this.stopAll();

    this.setState({ playingwhitenoise7: !this.state.playingwhitenoise7, playingSoundName: '07 Soft Hair Dryer - Unique Ultra-Low Pitch for Sensitive Sleepers' }, () => {
      if (this.state.playingwhitenoise7) {
        audioWhiteNoise7.play();
      }
      else {
        audioWhiteNoise7.pause();
      }
    })
  }

  playAudioWhitenoise8 = (audio) => {
    this.stopAll();

    this.setState({ playingwhitenoise8: !this.state.playingwhitenoise8, playingSoundName: '08 Soft Rain - Unique Ultra-Low Pitch for Sensitive Sleepers' }, () => {
      if (this.state.playingwhitenoise8) {
        audioWhiteNoise8.play();
      }
      else {
        audioWhiteNoise8.pause();
      }
    })
  }

  renderSwitch(param) {
    switch (param) {
      case 1:
        return 'Dormiu';
      case 2:
        return 'Acordou';
      case 3:
        return 'Mamou';
      case 4:
        return 'Trocou a fralda';
      case 5:
        return 'Tomou banho';
      case 6:
        return 'Arrotou';
      case 7:
        return 'Anotação: ';
      default:
        return '-';
    }
  }

  getDayOfWeek = (param) => {
    switch (param) {
      case 0:
        return 'Domingo';
      case 1:
        return 'Segunda-feira';
      case 2:
        return 'Terça-feira';
      case 3:
        return 'Quarta-feira';
      case 4:
        return 'Quinta-feira';
      case 5:
        return 'Sexta-feira';
      case 6:
        return 'Sábado';
      default:
        return '-';
    }
  }

  SendRequest(eventtype, details) {
    // fetch("https://dwwxbv4jf4.execute-api.us-east-1.amazonaws.com/prod/", {
    fetch("https://hugobetapi.trilogo.io/api/v1/events", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: eventtype,
        details: details
      })
    })
      .then(res => res.json())
      .then(
        (result) => {
          // alert("Sucesso!");
          this.UpdateHistory();
        },
        (error) => {
          alert('Erro: ' + error)
        }
      )

  }

  UpdateHistory = () => {
    fetch("https://hugobetapi.trilogo.io/api/v1/events", {
      method: 'GET',
    })
      .then(res => res.json())
      .then(
        (result) => {
          // console.log(result);
          const groups = result.data.reduce((groups, event) => {

            const date = event.date.split('T')[0];
            const time = event.date.split('T')[1];

            const datetime = new Date(event.date.slice(0, -1));
            const details = event.details;

            const formatteddate = date.split('-')[2] + "/" + date.split('-')[1] + "/" + date.split('-')[0] + " (" + this.getDayOfWeek(datetime.getDay()) + ")";

            if (!groups[formatteddate]) {
              groups[formatteddate] = [];
            }
            groups[formatteddate].push({
              key: event.id,
              id: event.id,
              type: event.type,
              date: event.date,
              day: date,
              time: time.split(':')[0] + ":" + time.split(':')[1],
              details: details
            });

            return groups;
          }, {});

          this.setState({
            events: groups
          })

        },
        (error) => {
          alert('Erro: ' + error)
        }
      );

  }

  render() {

    const InputEvent = (e) => {
      const eventtype = e.currentTarget.getAttribute("event-type")

      var confirmation = window.confirm("Você confirma a ação?");

      if (confirmation) {
        if (eventtype === '7') {
          var details = prompt("Qual medicação?");

          if (details === null) {
            return; //break out of the function early
          }
          this.SendRequest(eventtype, details);
        }
        else {
          this.SendRequest(eventtype);
        }
      }
    }

    return (
      <div className="root">
        <div className="container">
          <div className="row noMargin soundsIcons">
            <div className="col one">
              <div onClick={this.playAudioWhitenoise1} className="playstop">
                <span className="soundNumber" role="img" aria-label="som">1️⃣</span> {this.state.playingwhitenoise1 ? <span role="img" aria-label="dormiu">🔇</span> : <span role="img" aria-label="dormiu">🔈</span>}
              </div>
            </div>
            <div className="col one">
              <div onClick={this.playAudioWhitenoise2} className="playstop">
                <span className="soundNumber" role="img" aria-label="som">2️⃣</span> {this.state.playingwhitenoise2 ? <span role="img" aria-label="dormiu">🔇</span> : <span role="img" aria-label="dormiu">🔈</span>}
              </div>
            </div>
            <div className="col one">
              <div onClick={this.playAudioWhitenoise3} className="playstop">
                <span className="soundNumber" role="img" aria-label="som">3️⃣</span> {this.state.playingwhitenoise3 ? <span role="img" aria-label="dormiu">🔇</span> : <span role="img" aria-label="dormiu">🔈</span>}
              </div>
            </div>
            <div className="col one">
              <div onClick={this.playAudioWhitenoise4} className="playstop">
                <span className="soundNumber" role="img" aria-label="som">4️⃣</span> {this.state.playingwhitenoise4 ? <span role="img" aria-label="dormiu">🔇</span> : <span role="img" aria-label="dormiu">🔈</span>}
              </div>
            </div>
          </div>
          <div className="row noMargin soundsIcons">
            <div className="col one">
              <div onClick={this.playAudioWhitenoise5} className="playstop">
                <span className="soundNumber" role="img" aria-label="som">5️⃣</span> {this.state.playingwhitenoise5 ? <span role="img" aria-label="dormiu">🔇</span> : <span role="img" aria-label="dormiu">🔈</span>}
              </div>
            </div>
            <div className="col one">
              <div onClick={this.playAudioWhitenoise6} className="playstop">
                <span className="soundNumber" role="img" aria-label="som">6️⃣</span> {this.state.playingwhitenoise6 ? <span role="img" aria-label="dormiu">🔇</span> : <span role="img" aria-label="dormiu">🔈</span>}
              </div>
            </div>
            <div className="col one">
              <div onClick={this.playAudioWhitenoise7} className="playstop">
                <span className="soundNumber" role="img" aria-label="som">7️⃣</span> {this.state.playingwhitenoise7 ? <span role="img" aria-label="dormiu">🔇</span> : <span role="img" aria-label="dormiu">🔈</span>}
              </div>
            </div>
            <div className="col one">
              <div onClick={this.playAudioWhitenoise8} className="playstop">
                <span className="soundNumber" role="img" aria-label="som">8️⃣</span> {this.state.playingwhitenoise8 ? <span role="img" aria-label="dormiu">🔇</span> : <span role="img" aria-label="dormiu">🔈</span>}
              </div>
            </div>
          </div>
          <div className="row noMargin soundDesc">
            <div className="col one">
              <span>{this.state.playingSoundName}</span>
            </div>
          </div>
          <br />
          <div className="row noMargin">
            <div className="col one">
              <button className="b1" event-type="1" onClick={InputEvent}><h1>Dormiu <span role="img" aria-label="dormiu">🌚</span></h1></button>
            </div>
            <div className="col two">
              <button className="b2" event-type="2" onClick={InputEvent}><h1>Acordou <span role="img" aria-label="dormiu">🌞</span></h1></button>
            </div>
          </div>
          <div className="row noMargin">
            <div className="col three">
              <button className="b3" event-type="3" onClick={InputEvent}><h1>Mamou <span role="img" aria-label="dormiu">🍼</span></h1></button>
            </div>
            <div className="col four">
              <button className="b6" event-type="6" onClick={InputEvent}><h1>Arrotou <span role="img" aria-label="dormiu">🥴</span></h1></button>
            </div>
          </div>
          <div className="row noMargin">
            <div className="col four">
              <button className="b4" event-type="4" onClick={InputEvent}><h1>Trocou a fralda <span role="img" aria-label="dormiu">💩</span></h1></button>
            </div>
            <div className="col three">
              <button className="b5" event-type="5" onClick={InputEvent}><h1>Tomou banho <span role="img" aria-label="dormiu">🛁</span></h1></button>
            </div>
          </div>
          <div className="row noMargin">
            <div className="col four">
              <button className="b7" event-type="7" onClick={InputEvent}><h1>Remédio & etc<span role="img" aria-label="dormiu">💊</span></h1></button>
            </div>
          </div>
        </div>
        <div className="history" onClick={this.UpdateHistory}>
          <div className="history-content-title"><center><span>Últimas atividades</span></center></div>
          <div className="history-content">
            <div>
              {Object.keys(this.state.events).map(key =>
                <div key={key}>
                  <div>
                    <span><b>{key}</b></span>
                  </div>
                  {this.state.events[key].map(event => (
                    <div key={event.id}>
                      <span><span>{event.time}</span> - <b>{this.renderSwitch(event.type)} {event.details}</b></span>
                    </div>
                  ))}
                  <br />
                </div>
              )}
            </div>
          </div>
        </div>
      </div >
    );
  }


}

