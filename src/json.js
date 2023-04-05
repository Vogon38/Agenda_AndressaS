export const surveyJson = {
    title: "Sua Imagem com Estilo",
    description: "Por favor, preencha todas as informações solicitadas com precisão para que possamos agendar seu serviço com sucesso. Caso tenha alguma dúvida ou precise de assistência adicional, não hesite em entrar em contato conosco.",
    elements: [
      {
        name: "fullName",
        title: "Insira seu nome completo:",
        type: "text",
        requiredErrorText: "Campo obrigatório",
        isRequired: true
      },
      {
        name: "date",
        type: "text",
        title: "Selecione uma data futura:",
        inputType: "date",
        min: new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        requiredErrorText: "Campo obrigatório",
        isRequired: true,
        validators: [
          {
            type: "expression",
            expression: "{var:date} >= addDays(today(), 30)",
            text: "Por favor, selecione uma data com pelo menos 30 dias a partir de hoje."
          }
        ]
      },
      {
        name: "service",
        title: "Escolha um ou mais serviços:",
        type: "tagbox",
        choices: [
          {
            "value": "coloracao",
            "text": "Coloração"
          },
          {
            "value": "pesquisa",
            "text": "Pesquisa"
          }
        ]
      },
      {
        name: "email",
        type: "text",
        title: "Endereço de E-mail:",
        inputType: "email",
        placeholder: "foobar@example.com",
        isRequired: false,
        autocomplete: "email"
      },
      {
        name: "phone",
        type: "text",
        title: "Telefone para contato:",
        inputType: "tel",
        placeholder: "(00) 000000000",
        autocomplete: "tel",
        requiredErrorText: "Campo obrigatório",
        isRequired: true
      },
      {
        name: "info",
        type: "comment",
        title: "Caso queira adicionar alguma informação, utilize este campo:",
        maxLength: 300
      }
    ],
    showQuestionNumbers: "off",
    completeText: "Enviar",
    completedHtml: "Obrigada!"
  };
  