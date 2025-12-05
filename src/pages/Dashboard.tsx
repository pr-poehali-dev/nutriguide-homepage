import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [glassesCompleted, setGlassesCompleted] = useState(4);
  const totalGlasses = 8;
  const currentDay = 7;
  const totalDays = 21;

  const handleMarkGlass = () => {
    if (glassesCompleted < totalGlasses) {
      setGlassesCompleted(glassesCompleted + 1);
    }
  };

  const menuItems = [
    { icon: "BarChart3", label: "Мой прогресс", active: true, path: "/dashboard" },
    { icon: "BookOpen", label: "Библиотека привычек", active: false, path: "/habits" },
    { icon: "Utensils", label: "Рецепты", active: false, path: "/recipes" },
    { icon: "User", label: "Профиль", active: false, path: "/profile" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="flex">
        {/* Left Sidebar Navigation */}
        <aside className="w-64 min-h-screen bg-white border-r border-gray-200 p-6 fixed left-0 top-0">
          <div className="flex items-center mb-12">
            <div className="bg-gradient-to-br from-green-500 to-blue-600 p-2 rounded-xl">
              <Icon name="Leaf" className="w-6 h-6 text-white" />
            </div>
            <span className="ml-3 text-xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              NutriGuide
            </span>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                  item.active
                    ? "bg-gradient-to-r from-green-50 to-blue-50 text-green-600 font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Icon name={item.icon} className="w-5 h-5 mr-3" />
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-64 p-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8 animate-fade-in">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Ваша цель: 8 стаканов воды в день
              </h1>
              <p className="text-gray-600">
                Отличная работа! Продолжайте в том же духе 💪
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {/* Main Progress Area */}
              <div className="col-span-2 space-y-6">
                {/* 21-Day Progress */}
                <Card className="p-8 animate-scale-in">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Прогресс формирования привычки
                    </h3>
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      День {currentDay} из {totalDays}
                    </span>
                  </div>
                  <Progress value={(currentDay / totalDays) * 100} className="h-3 mb-2" />
                  <p className="text-sm text-gray-500">
                    Осталось {totalDays - currentDay} дней до формирования привычки
                  </p>
                </Card>

                {/* Water Glasses Visualization */}
                <Card className="p-8 animate-scale-in" style={{ animationDelay: "0.1s" }}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">
                    Сегодняшний прогресс
                  </h3>
                  
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    {Array.from({ length: totalGlasses }).map((_, index) => (
                      <div
                        key={index}
                        className={`relative flex flex-col items-center justify-end h-32 rounded-2xl border-4 transition-all duration-500 ${
                          index < glassesCompleted
                            ? "border-blue-400 bg-gradient-to-t from-blue-400 to-blue-200"
                            : "border-gray-200 bg-gray-50"
                        }`}
                      >
                        <Icon
                          name="Droplets"
                          className={`w-8 h-8 mb-2 ${
                            index < glassesCompleted ? "text-blue-600" : "text-gray-300"
                          }`}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-3xl font-bold text-gray-900">
                        {glassesCompleted}/{totalGlasses}
                      </p>
                      <p className="text-sm text-gray-500">стаканов выполнено</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-blue-600">
                        {Math.round((glassesCompleted / totalGlasses) * 100)}%
                      </p>
                      <p className="text-sm text-gray-500">дневная цель</p>
                    </div>
                  </div>

                  <Button
                    onClick={handleMarkGlass}
                    disabled={glassesCompleted >= totalGlasses}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {glassesCompleted >= totalGlasses ? (
                      <>
                        <Icon name="CheckCircle2" className="mr-2 w-5 h-5" />
                        Цель достигнута!
                      </>
                    ) : (
                      <>
                        <Icon name="Plus" className="mr-2 w-5 h-5" />
                        Отметить стакан
                      </>
                    )}
                  </Button>
                </Card>

                {/* Statistics */}
                <div className="grid grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-green-700 mb-1">Текущая серия</p>
                        <p className="text-3xl font-bold text-green-900">7 дней</p>
                        <p className="text-sm text-green-600 mt-1">подряд 🔥</p>
                      </div>
                      <div className="bg-green-200 p-3 rounded-xl">
                        <Icon name="Flame" className="w-6 h-6 text-green-700" />
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-blue-700 mb-1">Всего выпито</p>
                        <p className="text-3xl font-bold text-blue-900">42 литра</p>
                        <p className="text-sm text-blue-600 mt-1">за все время 💧</p>
                      </div>
                      <div className="bg-blue-200 p-3 rounded-xl">
                        <Icon name="Droplet" className="w-6 h-6 text-blue-700" />
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="space-y-6">
                {/* Today's Tip */}
                <Card className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200 animate-scale-in" style={{ animationDelay: "0.3s" }}>
                  <div className="flex items-start mb-3">
                    <div className="bg-yellow-200 p-2 rounded-lg mr-3">
                      <Icon name="Lightbulb" className="w-5 h-5 text-yellow-700" />
                    </div>
                    <h4 className="font-semibold text-gray-900">Совет дня</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Добавьте в воду дольку лимона для вкуса и дополнительной пользы
                  </p>
                </Card>

                {/* Tomorrow's Reminder */}
                <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 animate-scale-in" style={{ animationDelay: "0.4s" }}>
                  <div className="flex items-start mb-3">
                    <div className="bg-purple-200 p-2 rounded-lg mr-3">
                      <Icon name="Bell" className="w-5 h-5 text-purple-700" />
                    </div>
                    <h4 className="font-semibold text-gray-900">Напоминание</h4>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Не забудьте поставить бутылку с водой на рабочий стол завтра утром
                  </p>
                </Card>

                {/* Change Habit */}
                <Card className="p-6 border-gray-200 animate-scale-in" style={{ animationDelay: "0.5s" }}>
                  <h4 className="font-semibold text-gray-900 mb-3">Настройки привычки</h4>
                  <Link to="/">
                    <Button
                      variant="outline"
                      className="w-full justify-start text-gray-700 hover:bg-gray-50"
                    >
                      <Icon name="RefreshCw" className="w-4 h-4 mr-2" />
                      Изменить привычку
                    </Button>
                  </Link>
                </Card>

                {/* Motivational Quote */}
                <Card className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 border-gray-200 animate-scale-in" style={{ animationDelay: "0.6s" }}>
                  <div className="flex items-start mb-3">
                    <Icon name="Quote" className="w-5 h-5 text-gray-400 mr-2" />
                  </div>
                  <p className="text-gray-700 italic leading-relaxed text-sm">
                    "Маленькие ежедневные улучшения со временем приводят к потрясающим результатам"
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
