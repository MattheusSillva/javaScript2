class BoxShadowGenerator {
    constructor (
        horizontal, 
        horizontalRef, 
        vertical, 
        verticalRef, 
        blur, 
        blurRef, 
        spread, 
        spreadRef, 
        color,
        colorRef,
        opacity,
        opacityRef,
        inset,
        previewBox, 
        rule, 
        webkitRule, 
        mozRule,
        boxColorInput
    ) 
        {
        this.horizontal = horizontal;
        this.horizontalRef = horizontalRef;
        this.vertical = vertical;
        this.verticalRef = verticalRef;
        this.blur = blur;
        this.blurRef = blurRef;
        this.spread = spread; 
        this.spreadRef = spreadRef; 
        this.color = color;
        this.colorRef = colorRef;
        this.opacity = opacity;
        this.opacityRef = opacityRef;
        this.inset = inset;
        this.insetRef = inset.checked;
        this.previewBox = previewBox;
        this.rule = rule; 
        this.webkitRule = webkitRule; 
        this.mozRule = mozRule;
        this.boxColorInput = boxColorInput;
    }

    initialize() {
        this.horizontalRef.value = this.horizontal.value;
        this.verticalRef.value = this.vertical.value;
        this.spreadRef.value = this.spread.value;
        this.blurRef.value = this.blur.value;
        this.colorRef.value = this.color.value;

        this.applyRule()
        this.showRule()
    }

    applyRule() {
        const rgbValue = this.hexToRgb(this.colorRef.value);

        const shadowRule = `${this.insetRef ? "inset" : ""} ${this.horizontalRef.value}px ${this.verticalRef.value}px ${this.blurRef.value}px ${this.spreadRef.value}px rgba(${rgbValue}, ${this.opacityRef.value})`;

        this.previewBox.style.backgroundColor = `${this.boxColorInput.value}`

        
        this.previewBox.style.boxShadow = shadowRule;
        this.currentRule = shadowRule;
    }

    showRule() {
        this.rule.innerText = this.currentRule;
        this.webkitRule.innerText = this.currentRule;
        this.mozRule.innerText = this.currentRule;
    }

    updateValue(type, value) {
        switch(type) {
            case "horizontal":
                this.horizontalRef.value = value;
                break
            case "vertical":    
                this.verticalRef.value = value;
                break
            case "blur":    
                this.blurRef.value = value;
                break
            case "spread":    
                this.spreadRef.value = value;
                break
            case "color":
                this.colorRef.value = value;
                break
            case "colorRef":
                this.color.value = value;
                break
            case "opacity":
                this.opacityRef.value = value;
                break
            case "inset":
                this.insetRef = value;                 
        }

        this.applyRule()
        this.showRule()
    }

    hexToRgb(hex) {
        return `${("0x" + hex[1] + hex[2]) | 0}, ${("0x" + hex[3] + hex[4]) | 0}, ${
            ("0x" + hex[5] + hex[6]) | 0
        }`;
    }
}

// Seleção de elementos
const horizontal = document.querySelector("#horizontal");
const horizontalRef = document.querySelector("#horizontal-value");
const vertical = document.querySelector("#vertical");
const verticalRef = document.querySelector("#vertical-value");
const blur = document.querySelector("#blur");
const blurRef = document.querySelector("#blur-value");
const spread = document.querySelector("#spread");
const spreadRef = document.querySelector("#spread-value");

const color = document.querySelector("#color");
const colorRef = document.querySelector("#color-value")
const opacity = document.querySelector("#opacity");
const opacityRef = document.querySelector("#opacity-value");
const inset = document.querySelector("#inset");

const previewBox = document.querySelector("#box");

const rule = document.querySelector("#rule span");
const webkitRule = document.querySelector("#webkit-rule span");
const mozRule = document.querySelector("#moz-rule span");

const boxColorInput = document.querySelector("#box-color");

const boxShadow = new BoxShadowGenerator(
    horizontal, 
    horizontalRef, 
    vertical, 
    verticalRef, 
    blur, 
    blurRef, 
    spread, 
    spreadRef,
    color,
    colorRef,
    opacity,
    opacityRef,
    inset, 
    previewBox, 
    rule, 
    webkitRule, 
    mozRule,
    boxColorInput
)

boxShadow.initialize()
// Eventos
horizontal.addEventListener("input", (e) => {
    const value = e.target.value
    
    boxShadow.updateValue("horizontal", value)
})

vertical.addEventListener("input", (e) => {
    const value = e.target.value
    
    boxShadow.updateValue("vertical", value)
})

spread.addEventListener("input", (e) => {
    const value = e.target.value
    
    boxShadow.updateValue("spread", value)
})

blur.addEventListener("input", (e) => {
    const value = e.target.value
    
    boxShadow.updateValue("blur", value)
})

color.addEventListener("input", (e) => {
    const value = e.target.value
    
    boxShadow.updateValue("color", value)
})

colorRef.addEventListener("input", (e) => {
    const value = e.target.value;

    boxShadow.updateValue("colorRef", value)
})

opacity.addEventListener("input", (e) => {
    const value = e.target.value;

    boxShadow.updateValue("opacity", value)
})

inset.addEventListener("input", (e) => {
    const value = e.target.checked;

    boxShadow.updateValue("inset", value)
})

boxColorInput.addEventListener("input", () => {
    boxShadow.applyRule()
})

// Copiar regra
const rulesArea = document.querySelector("#rules-area");
const copyInstructions = document.querySelector("#copy-instructions");

rulesArea.addEventListener("click", () => {
    const rules = rulesArea.innerText.replace(/^\s*\n/gm, "")
    navigator.clipboard.writeText(rules).then(() => {
        copyInstructions.innerText = "Regra copiada com sucesso";

        setTimeout(() => {
            copyInstructions.innerText = "Clique no quadro acima para copiar as regras";
        }, 1000)
    })
})