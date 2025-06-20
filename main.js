import { createElement } from 'lwc';
import MatchForm from './modules/matchForm/matchForm.js';
import MatchList from './modules/matchList/matchList.js';

document.body.appendChild(createElement('match-form', { is: MatchForm }));
document.body.appendChild(createElement('match-list', { is: MatchList }));