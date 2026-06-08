import { getMottos } from "@/lib/db";
import { addMottoAction, deleteMottoAction } from "@/lib/actions";

export default function MottoAdmin() {
  const mottos = getMottos();

  return (
    <main className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="mb-10">
          <div className="accent-bar mb-4" />
          <h1 className="text-3xl font-bold text-[#1A1A2E]">Mottos verwalten</h1>
        </div>

        {/* Tabelle */}
        <div className="border border-gray-200 rounded-xl overflow-hidden mb-10">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
                  Motto
                </th>
                <th className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-widest text-gray-400 hidden sm:table-cell">
                  Erstellt
                </th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {mottos.length === 0 && (
                <tr>
                  <td colSpan={3} className="px-4 py-8 text-center text-gray-400">
                    Noch keine Mottos vorhanden.
                  </td>
                </tr>
              )}
              {mottos.map((motto, i) => (
                <tr
                  key={motto.id}
                  className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="px-4 py-3 text-[#1A1A2E] font-medium">{motto.text}</td>
                  <td className="px-4 py-3 text-gray-400 hidden sm:table-cell">
                    {new Date(motto.created_at).toLocaleDateString("de-DE")}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <form
                      action={async () => {
                        "use server";
                        await deleteMottoAction(motto.id);
                      }}
                    >
                      <button
                        type="submit"
                        className="text-xs text-gray-400 hover:text-[#E8503E] transition-colors font-medium"
                      >
                        Löschen
                      </button>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Hinzufügen */}
        <div className="border border-gray-200 rounded-xl p-6">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">
            Neues Motto
          </h2>
          <form action={addMottoAction} className="flex gap-3">
            <input
              type="text"
              name="text"
              required
              placeholder="Dein Motto..."
              className="flex-1 border border-gray-200 rounded-lg px-4 py-2 text-sm text-[#1A1A2E] placeholder-gray-300 focus:outline-none focus:border-[#E8503E] transition-colors"
            />
            <button
              type="submit"
              className="bg-[#E8503E] hover:bg-[#d44432] text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors"
            >
              Hinzufügen
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
