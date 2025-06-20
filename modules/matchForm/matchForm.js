import { LightningElement } from 'lwc';

export default class MatchForm extends LightningElement {
  match = { teamA: '', teamB: '', scoreA: '', scoreB: '' };

  handleChange(event) {
    const { name, value } = event.target;
    this.match[name] = value;
  }

  handleSubmit() {
    const savedMatches = JSON.parse(localStorage.getItem('matches') || '[]');
    savedMatches.push(this.match);
    localStorage.setItem('matches', JSON.stringify(savedMatches));
    this.match = { teamA: '', teamB: '', scoreA: '', scoreB: '' };
    window.dispatchEvent(new CustomEvent('matchadded'));
  }

  render() {
    return `
      <div>
        <h2>Inserisci Risultato</h2>
        <input placeholder="Squadra A" name="teamA" onchange="this.getRootNode().host.handleChange(event)"><br>
        <input placeholder="Squadra B" name="teamB" onchange="this.getRootNode().host.handleChange(event)"><br>
        <input type="number" placeholder="Gol A" name="scoreA" onchange="this.getRootNode().host.handleChange(event)"><br>
        <input type="number" placeholder="Gol B" name="scoreB" onchange="this.getRootNode().host.handleChange(event)"><br>
        <button onclick="this.getRootNode().host.handleSubmit()">Salva</button>
      </div>`;
  }
}