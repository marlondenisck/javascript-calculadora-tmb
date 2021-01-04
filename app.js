// 1 - Selecionar o form
const form = document.querySelector('form')

//
// 3.1.1 Funcao que recebe um input por parametro e retorna seu valor em Number
const getInputNumberValue = id => {
  return Number(document.getElementById(id).value)
}

// 3.1.2 Funcao que recebe um select por parametro e retorna o valor selecionado
const getInputSelectedValue = id => {
  const select = document.getElementById(id)
  return select.options[select.selectedIndex].value
}



// 3 Funcao do evento de sumit
const handleSumit = event => {
  event.preventDefault()

  // 3.1 Pegar os valores dos input
  const age = getInputNumberValue('age')
  const weight = getInputNumberValue('weight')
  const height = getInputNumberValue('height')
  const gender = getInputSelectedValue('gender')
  const activityLevel = getInputSelectedValue('activity_level')

  // 3.2 Calcular a tmb
  const tmb = Math.round(
    gender === 'female' 
    ? (655 + (9.6 * weight) + (1.8 * height) - (4.7 * age))
    : (66 + (13.7 * weight) + (5 * height) - (6.8 * age))
  )

  // 3.2.1 Calcular outras nuances, manutencao, diminuir peso, ou aumentar peso
  const maintenance = Math.round((tmb * Number(activityLevel)))
  const loseWeight = maintenance - 450
  const gainWeight = maintenance + 450

  // 3.3 Layout do resultado
  const layout = `
    <h2>Aqui está o resultado:</h2>
      <div class="result-content">
        <ul>
          <li>
            Seu metabolismo basal é de <strong>${tmb} calorias</strong>.
          </li>
          <li>
            Para manter o seu peso você precisa consumir em média <strong>${maintenance} calorias</strong>.
          </li>
          <li>
            Para perder peso você precisa consumir em média <strong>${loseWeight} calorias</strong>.
          </li>
          <li>
            Para ganhar peso você precisa consumir em média <strong>${gainWeight} calorias</strong>.
          </li>
        </ul>
      </div>
    `

    // 3.3.1 Inserir layout no HTML
    const result = document.getElementById('result')
    result.innerHTML = layout
}

// 2 Adicionar um evento de sumit
form.addEventListener('submit', handleSumit)

