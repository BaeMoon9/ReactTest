import { Component } from 'react';
import ScrollBox from './ScrollBox';
import ValidationSample from './ValidationSample';

class App extends Component {
	render() {
		return (
			<div>
				<ScrollBox ref={(ref) => (this.ScrollBox = ref)} />
				<button onclick={() => this.ScrollBox.ScrollToBottom()}>맨밑으로</button>
			</div>
		);
	}
}

export default App;
