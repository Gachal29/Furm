from django import forms


class SettingsForm(forms.Form):
    width = forms.IntegerField(
        label = "横",
        max_value = 1000,
        min_value = 1,
        initial = 410,
    )

    height = forms.IntegerField(
        label = "縦",
        max_value = 1000,
        min_value = 1,
        initial = 410,
    )

    mat_num = forms.IntegerField(
        label = "畳",
        max_value = 1000,
        min_value = 1,
        initial = 1,
    )
