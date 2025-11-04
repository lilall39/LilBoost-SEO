export default async function handler(req, res) {
  try {
    const apiKey = process.env.API_KEY_BACKLINKS;
    const site = req.query.site || "https://lil-shop.fr";
    const apiUrl = `https://api.openlinkprofiler.org/endpoint?apikey=${apiKey}&domain=${encodeURIComponent(site)}`;
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error(`Erreur API (${response.status})`);
    const data = await response.json();
    const backlinks = data.backlinks_count || 0;
    const referringDomains = data.referring_domains || 0;

    res.status(200).json({
      success: true,
      site,
      backlinks,
      referringDomains,
      message: "Analyse des backlinks effectuée avec succès"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message || "Erreur inconnue"
    });
  }
}
