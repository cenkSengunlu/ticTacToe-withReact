export function calculateWinner(square){

  // Olası kazanma durumları
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  
  // Kazanma durumlarının olduğu array dön
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    // Kazanma durumunu kontrol et - Her üç kutu dolu ve aynıysa kazanmış demektir
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      // Kazanan durum için obje döndür - Kazanan oyuncu & Kazanan çizginin indisleri
      return {
        winner: square[a],
        winnerSquare: [a, b, c]
      };
    }
  }
  // Kazanma durumu olmadığı taktirde dönülecek obje içerisindeki 'winner' property'si için
  // kontrol sağla - 'square' dizisinin tamamı null olmayan elemanlardan oluşuyorsa kazanan olmadığı için '-' döndür
  // bu koşul sağlanmıyorsa null döndür - Kazanan olmadığı için winnerSquare property'sini boş dizi olarak döndür
  return {
    winner: square.length && !square.includes(null) ? '-' : null,
    winnerSquare: []
  };
}