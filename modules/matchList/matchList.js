import { LightningElement } from 'lwc';

export default class MatchList extends LightningElement {
  matches = [];

  connectedCallback() {
    this.loadMatches();
    window.addEventListener('matchadded', () => this.loadMatches());
  }

  loadMatches() {
    this.matches = JSON.parse(localStorage.getItem('matches') || '[]');
    this.render();
  }

  render() {
    const list = this.matches.map(m => `
      <li>${m.teamA} ${m.scoreA} - ${m.scoreB} ${m.teamB}</li>
    `).join('');
    this.template.innerHTML = `<ul>${list}</ul>`;
  }
}
