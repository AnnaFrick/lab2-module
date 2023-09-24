// import Counters from '../../index.js'

const template = document.createElement('template')

template.innerHTML = `
    <form id="fileForm">
        <input type="file" id="fileInput">
        <button type="button" id="countButton">Count Signs</button>
    </form>
    <div id="results">
        <p>Total Signs: <span id="totalSigns"></span></p>
        <p>Vowels: <span id="vowels"></span></p>
        <p>Consonants: <span id="consonants"></span></p>
    </div>

<style>
#fileForm {
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    width: 300px;
}

input {
    font-size: 18px;
    padding: 20px;
}

button {
    font-size: 18px;
    background-color: #0074d9;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}

#results {
    font-size: 20px;
    margin-top: 20px;
    text-align: left;
}

#results p {
    margin: 10px 0;
}

#results span {
    font-weight: bold;
    color: #333;
}
</style>
`
customElements.define('counter-app',

  /**
   *
   */
  class extends HTMLElement {
    /**
     *
     */
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
    }

    /**
     * Lifecycle method called when the component is connected to the DOM.
     */
    connectedCallback () {
      this.shadowRoot.appendChild(template.content.cloneNode(true))
      this.setupListeners()
    }

    /**
     *
     */
     async setupListeners () {
         const fileInput = this.shadowRoot.querySelector('#fileInput')
         const countButton = this.shadowRoot.querySelector('#countButton')
         const totalSigns = this.shadowRoot.querySelector('#totalSigns')
         const vowels = this.shadowRoot.querySelector('#vowels')
         const consonants = this.shadowRoot.querySelector('#consonants')
         
         countButton.addEventListener('click', async () => {
            console.log('click')
             const file = fileInput.files[0]
             
             if (file) {
                 const filePath = URL.createObjectURL(file)
                 const signCount = Counters.countSignsInFile(filePath)
                 const vowelsCount = Counters.countVowelsInFile(filePath)
                 const consonantsCount = Counters.countConsonantsInFile(filePath)
                 
                 totalSigns.textContent = signCount
                 vowels.textContent = vowelsCount
                 consonants.textContent = consonantsCount
                }
            })
        }
    })
    