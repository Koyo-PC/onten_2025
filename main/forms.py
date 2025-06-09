from django import forms

class CirclesSearchForm(forms.Form):
    # keyword = forms.CharField(
    #     label="検索",
    #     required=True,
    #     widget = forms.TextInput(attrs={"placeholder": "サークル名で検索"}),
    # )
    keyword = forms.CharField(
        label="検索",
        required=True,
        widget=forms.TextInput({"placeholder":"サークル名で検索", "class": "circles__form_search"})
    )