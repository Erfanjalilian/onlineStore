export default function SettingsSection() {
    return (
      <section id="settings">
        <h2 className="text-xl font-bold mb-4 text-center">تنظیمات</h2>
        <div className="bg-white p-6 rounded-lg shadow">
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-right">عنوان سایت</label>
              <input
                type="text"
                className="w-full p-2 border rounded text-right"
                placeholder="عنوان سایت"
              />
            </div>
            <div className="mb-4 text-right">
              <label className="block text-gray-700">لوگو</label>
              <input
                type="file"
                className="w-full p-2 border rounded"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              ذخیره تغییرات
            </button>
          </form>
        </div>
      </section>
    );
  }