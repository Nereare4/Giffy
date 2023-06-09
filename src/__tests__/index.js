
import { render, screen, waitForElement, fireEvent } from '@testing-library/react';
import App from '../App';

/*test('home work as expected', async () => {
    const {container} = render(<App />)
    const gifLink = await waitForElement(
      () => container.querySelector('.Gif-link')
    )
    expect(gifLink).toBeVisible()
})

test('search form could be used', async () => {
    render(<App />)
    const input = await screen.findByRole('textbox')
    //const button = await screen.findByRole('button')
  
    fireEvent.change(input, { target: { value: 'Matrix' }})
    //fireEvent.click(button)
  
    const title = await screen.findByText('Matrix')
    expect(title).toBeVisible() 
})*/
test('renders without crashing', async() => {
  const {findByText} = render(<App />);
  const title = await findByText(/Last Search/i);
  expect(title).toBeInTheDocument();
});