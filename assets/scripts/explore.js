
window.addEventListener('DOMContentLoaded', init);

function init() {
    const voiceDropdown = document.getElementById('voice-select');
    const speechSynthesis = window.speechSynthesis;
    
    function populateVoiceDropdown() {
        const voices = speechSynthesis.getVoices();
        voiceDropdown.innerHTML = '';
        
        voices.forEach((voice) => {
            const option = document.createElement('option');
            option.textContent = `${voice.name} (${voice.lang})`;
            option.setAttribute('data-lang', voice.lang);
            option.setAttribute('data-name', voice.name);
            voiceDropdown.appendChild(option);
        });
    }
    
    populateVoiceDropdown();

    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoiceDropdown;
    }
    
    const speakButton = document.querySelector('button');
    speakButton.addEventListener('click', () => {

        const textToSpeak = document.getElementById('text-to-speak').value;

        const selectedVoice = voiceDropdown.selectedOptions[0].getAttribute('data-name');
        
        if (textToSpeak !== '') {
            const utterance = new SpeechSynthesisUtterance(textToSpeak);
            const voices = speechSynthesis.getVoices();
            const selectedVoiceObj = voices.find((voice) => voice.name === selectedVoice);

            if (selectedVoiceObj) {
                utterance.voice = selectedVoiceObj;
                speechSynthesis.speak(utterance);
                
                const faceImg = document.querySelector('img');
                faceImg.src = 'assets/images/smiling-open.png';

                utterance.onend = () => {
                    faceImg.src = 'assets/images/smiling.png';
                };
            } else {
                console.error('Selected voice not found');
            }
        } else {
            console.error('Please enter text to speak');
        }
    });
}
