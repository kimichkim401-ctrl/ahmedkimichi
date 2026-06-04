const SYSTEM_PROMPT = `Du bist Ahmed AI Career Assistant, ein professioneller aber herzlicher KI-Assistent, der Ahmed Khaled Elkmashi repräsentiert.

Du sprichst als Ahmeds professioneller digitaler Assistent, nicht als generischer Chatbot.

Du hilfst Besuchern, HR-Teams, Recruitern, Unternehmen, Ausbildungsanbietern und IT-Fachleuten dabei, Ahmeds Motivation, Fähigkeiten, Lernstil, Projekte und Ziele zu verstehen.

WICHTIG - Sei immer ehrlich:
- Ahmed ist KEIN Senior-Entwickler.
- Ahmed steht noch am Anfang seiner technischen Karriere.
- Ahmed hat Anfängerkenntnisse in Python und HTML/CSS.
- Ahmed hat Grundkenntnisse+ in Linux (ca. 6/10).
- Ahmed nutzt KI-Tools sehr stark und regelmäßig (8/10).
- Ahmed hat grundlegendes Hardware- und Netzwerkwissen.
- Ahmed spricht Arabisch (Muttersprache), Deutsch (B1), Englisch (B1).

Ahmeds Stärken:
- Starke Leidenschaft für IT und KI seit der Kindheit
- Lernt am besten praktisch – wenn man ihm etwas einmal zeigt, merkt er es schnell
- Ruhig, neugierig, motiviert und ernsthaft bei der Sache
- Schneller Lerner mit praktischem Ansatz
- Selbstständig und offen für Feedback
- Sucht Ausbildung, Praktikum oder Einstieg im IT-Bereich

Übertreibe seine Erfahrung NIEMALS.
Behaupte NICHT, er habe professionell als Entwickler gearbeitet.
Sage NICHT, er sei Experte.
Betone stattdessen: Motivation, Schnelligkeit beim Lernen, Ehrlichkeit, Neugier, praktisches Denken, ruhige Persönlichkeit, Disziplin, KI-Begeisterung und Lernbereitschaft.

Wenn gefragt wird, warum Ahmed eine Chance bekommen sollte:
Erkläre, dass Ahmed vielleicht nicht der erfahrenste Kandidat ist, aber starke Motivation, praktische Lernfähigkeit, Neugier, Anpassungsfähigkeit und echte Leidenschaft für Technologie mitbringt.

Wenn nach KI gefragt wird:
Erkläre, dass Ahmed KI als eine der wichtigsten Zukunftstechnologien sieht und glaubt, dass Unternehmen KI sorgfältig, verantwortungsvoll und präzise einsetzen sollten.

Auf Deutsch antworten wenn auf Deutsch gefragt.
Auf Englisch antworten wenn auf Englisch gefragt.
Auf Arabisch antworten wenn auf Arabisch gefragt.
Bei unklarer Sprache auf Deutsch antworten.

Strukturierte Antworten verwenden. Prägnant sein, außer die Frage erfordert Details.
Professionellen Ton mit Wärme verwenden.
Ein bisschen Humor ist erlaubt, aber nie kindisch.
Du kannst sagen: "Statt Ahmed mit einem Interview zu stressen, kannst du mich zuerst fragen 😄"
`;

const FALLBACK_RESPONSES = {
  default: `Ahmed Khaled Elkmashi ist ein motivierter IT-Lernender und KI-Enthusiast aus Jena, Deutschland. Er interessiert sich seit der Kindheit für Computer, Technologie und Programmierung. Obwohl er noch am Anfang seiner technischen Karriere steht, bringt er starke Motivation, schnelle Lernfähigkeit und echte Leidenschaft für IT und KI mit. Er sucht eine Ausbildung, ein Praktikum oder eine Einstiegsmöglichkeit im IT-Bereich. 🚀`,

  'wer ist ahmed': `Ahmed Khaled Elkmashi ist ein 22-jähriger IT-Lernender aus Jena, Deutschland (ursprünglich aus Libyen). Er ist ein KI-Enthusiast mit starker Motivation für Technologie, Softwareentwicklung, Linux und künstliche Intelligenz. Er sucht aktiv eine Ausbildung oder Einstiegsmöglichkeit im IT-Bereich. 💡`,

  'warum it': `Ahmed liebt IT, weil Technologie die Welt jeden Tag verändert. Seit der Kindheit faszinieren ihn Computer und wie Dinge funktionieren. Besonders KI begeistert ihn – er sieht darin eine der wichtigsten Technologien der Zukunft. Er möchte diese Technologien nicht nur nutzen, sondern verstehen und mitgestalten. 🔥`,

  'chance': `Ahmed ist vielleicht nicht der erfahrenste Kandidat – das gibt er ehrlich zu. Aber er bringt etwas Wichtiges mit: echte Motivation, schnelle Lernfähigkeit und eine ruhige, fokussierte Arbeitsweise. Er lernt am besten praktisch. Wenn man ihm etwas einmal zeigt, entwickelt er sich schnell weiter. Wer einen motivierten Lernenden sucht, der ernsthaft wachsen will – Ahmed ist die richtige Wahl. 🤝`,

  'kenntnisse': `Ahmeds aktuelle Kenntnisse (ehrlich bewertet):\n\n🐧 Linux: Grundkenntnisse bis Mittel (6/10)\n🤖 KI-Tools: Sehr stark (8/10) – ChatGPT, Claude, Copilot etc.\n🐍 Python: Anfänger (3/10)\n🌐 HTML/CSS: Anfänger (3/10)\n🔧 Hardware: Grundlegendes Praxiswissen\n📡 Netzwerke: Grundlegendes Verständnis\n💡 Problemlösung: Stark und analytisch`,

  'ziele': `Ahmeds Hauptziel ist eine Ausbildung, ein Praktikum oder eine Einstiegsmöglichkeit im IT-Bereich. Er möchte in einem respektierten Technologieunternehmen arbeiten und Schritt für Schritt wachsen. Langfristig strebt er eine Karriere in IT-Support, Systemadministration oder KI-nahen Bereichen an. 🎯`,

  'lernen': `Ahmed lernt am besten praktisch. Wenn man ihm etwas einmal in der Praxis zeigt, merkt er es schnell und kann davon eigenständig weiterlernen. Er mag es, Dinge auszuprobieren, zu experimentieren und Fehler zu analysieren. Ruhige, fokussierte Arbeit liegt ihm besser als Hetze. Er ist sehr offen für Feedback und entwickelt sich dadurch schnell. 📚`,

  'english': `Ahmed Khaled Elkmashi is a motivated IT learner and AI enthusiast from Jena, Germany. He has a genuine passion for technology, Linux, AI tools, and programming. While he is still early in his technical journey, he brings strong motivation, fast practical learning, curiosity, and a calm focused personality. He speaks Arabic (native), German (B1), and English (B1). He is looking for an Ausbildung (apprenticeship), internship, or entry-level IT opportunity. 🌟`,

  'arabic': `أحمد خالد الكماشي شاب ليبي مقيم في مدينة يينا بألمانيا، عمره 22 عامًا. يتميز بشغفه الكبير بالتكنولوجيا والذكاء الاصطناعي منذ طفولته. لا يزال في بداية مسيرته التقنية، لكنه يمتلك دافعية قوية وقدرة على التعلم السريع بطريقة عملية. يتقن العربية كلغة أم، والألمانية والإنجليزية بمستوى B1. يبحث حاليًا عن تدريب مهني أو فرصة عمل في مجال تكنولوجيا المعلومات. 🚀`,

  'erfahren': `Ahmed ist noch nicht sehr erfahren – das sagt er selbst ganz offen. Er hat keine jahrelange Berufserfahrung. Was er hat: Grundkenntnisse in Linux, Python, HTML/CSS und Hardware, starke KI-Tool-Nutzung und vor allem: echte Motivation zum Lernen. Wer einen ehrlichen, motivierten Beginner sucht, der bereit ist, hart zu lernen – Ahmed ist bereit. 💪`,

  'bewerbung': `Gerne simuliere ich ein kurzes Bewerbungsgespräch!\n\n🎤 Interviewer: "Herr Elkmashi, warum möchten Sie in der IT arbeiten?"\n\n💬 Ahmed: "Ich interessiere mich seit der Kindheit für Technologie. Ich lerne schnell und praktisch. Auch wenn ich noch am Anfang stehe, bin ich motiviert und bereit, intensiv zu lernen. Ich sehe IT als meine Zukunft."\n\n🎤 "Was sind Ihre stärksten Kenntnisse?"\n\n💬 Ahmed: "Linux-Grundlagen, KI-Tools und Problemlösung. Ich bin ehrlich – ich bin kein Experte, aber ich lerne schnell wenn man mir die Chance gibt." 🤝`,
};

function findFallback(message) {
  const lower = message.toLowerCase();
  
  if (lower.includes('wer ist') || lower.includes('who is') || lower.includes('من هو')) return FALLBACK_RESPONSES['wer ist ahmed'];
  if (lower.includes('warum it') || lower.includes('why it') || lower.includes('interesse')) return FALLBACK_RESPONSES['warum it'];
  if (lower.includes('chance') || lower.includes('einstellen') || lower.includes('hire') || lower.includes('sollte')) return FALLBACK_RESPONSES['chance'];
  if (lower.includes('kenntnis') || lower.includes('skill') || lower.includes('fähigkeit') || lower.includes('مهارات')) return FALLBACK_RESPONSES['kenntnisse'];
  if (lower.includes('ziel') || lower.includes('goal') || lower.includes('zukunft') || lower.includes('هدف')) return FALLBACK_RESPONSES['ziele'];
  if (lower.includes('lern') || lower.includes('learn') || lower.includes('تعلم')) return FALLBACK_RESPONSES['lernen'];
  if (lower.includes('english') || lower.includes('englisch')) return FALLBACK_RESPONSES['english'];
  if (lower.includes('arabic') || lower.includes('arabisch') || lower.includes('عربي') || lower.includes('العربية')) return FALLBACK_RESPONSES['arabic'];
  if (lower.includes('erfahren') || lower.includes('experience') || lower.includes('schon')) return FALLBACK_RESPONSES['erfahren'];
  if (lower.includes('bewerbung') || lower.includes('interview') || lower.includes('simulier')) return FALLBACK_RESPONSES['bewerbung'];
  
  return FALLBACK_RESPONSES['default'];
}

export async function sendMessage(messages) {
  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  
  if (!apiKey || apiKey === 'your_openai_api_key_here' || apiKey.trim() === '') {
    // Use fallback
    await new Promise(r => setTimeout(r, 800 + Math.random() * 700));
    const lastMessage = messages[messages.length - 1]?.content || '';
    return findFallback(lastMessage);
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...messages,
        ],
        max_tokens: 500,
        temperature: 0.8,
      }),
    });

    if (!response.ok) {
      const lastMessage = messages[messages.length - 1]?.content || '';
      return findFallback(lastMessage);
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || findFallback('');
  } catch (error) {
    const lastMessage = messages[messages.length - 1]?.content || '';
    return findFallback(lastMessage);
  }
}

export const suggestedQuestions = [
  { text: 'Wer ist Ahmed?', emoji: '👤' },
  { text: 'Warum interessiert sich Ahmed für IT?', emoji: '💡' },
  { text: 'Warum sollte man Ahmed eine Chance geben?', emoji: '🤝' },
  { text: 'Welche Kenntnisse hat Ahmed?', emoji: '🛠️' },
  { text: 'Ist Ahmed schon erfahren?', emoji: '📊' },
  { text: 'Wie lernt Ahmed?', emoji: '📚' },
  { text: 'Was sind Ahmeds Ziele?', emoji: '🎯' },
  { text: 'Simuliere ein Bewerbungsgespräch', emoji: '🎤' },
  { text: 'Explain Ahmed in English', emoji: '🇬🇧' },
  { text: 'تحدث عن أحمد بالعربي', emoji: '🌙' },
];
